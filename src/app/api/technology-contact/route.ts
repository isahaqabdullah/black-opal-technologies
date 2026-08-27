import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { projectTypeOptions } from '../../_data/site';

type TechnologyContactSubmission = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  projectLocation: string;
  projectType: string;
  projectDescription: string;
  website: string;
};

const requiredFields: Array<keyof Omit<TechnologyContactSubmission, 'phone' | 'website'>> = [
  'firstName',
  'lastName',
  'company',
  'email',
  'projectLocation',
  'projectType',
  'projectDescription',
];

function textValue(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function readSubmission(value: unknown): TechnologyContactSubmission {
  const input = value && typeof value === 'object' ? (value as Record<string, unknown>) : {};

  return {
    firstName: textValue(input.firstName, 80),
    lastName: textValue(input.lastName, 80),
    company: textValue(input.company, 120),
    email: textValue(input.email, 160),
    phone: textValue(input.phone, 40),
    projectLocation: textValue(input.projectLocation, 120),
    projectType: textValue(input.projectType, 80),
    projectDescription: textValue(input.projectDescription, 4000),
    website: textValue(input.website, 120),
  };
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function detailRow(label: string, value: string) {
  if (!value) {
    return '';
  }

  return `<tr><td style="padding:8px 12px;color:#746b5a;font-size:13px;width:150px">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#17130c;font-size:14px">${escapeHtml(value)}</td></tr>`;
}

function buildTextEmail(submission: TechnologyContactSubmission) {
  return [
    'New Black Opal Technologies project enquiry',
    '',
    `Name: ${submission.firstName} ${submission.lastName}`,
    `Company: ${submission.company}`,
    `Email: ${submission.email}`,
    submission.phone ? `Phone: ${submission.phone}` : '',
    `Project location: ${submission.projectLocation}`,
    `Project type: ${submission.projectType}`,
    '',
    'Project description:',
    submission.projectDescription,
  ].filter(Boolean).join('\n');
}

function buildHtmlEmail(submission: TechnologyContactSubmission) {
  return `
    <div style="background:#0b0a08;padding:28px;font-family:Arial,sans-serif">
      <div style="max-width:680px;margin:0 auto;background:#f7f1e2;border:1px solid #c9a24d">
        <div style="padding:24px 28px;border-bottom:1px solid #d9cfb8">
          <p style="margin:0 0 8px;color:#8b6a25;font-size:12px;letter-spacing:.12em;text-transform:uppercase">Black Opal Technologies</p>
          <h1 style="margin:0;color:#17130c;font-size:22px;line-height:1.35">New project enquiry</h1>
        </div>
        <table role="presentation" style="width:100%;border-collapse:collapse;margin:0">
          ${detailRow('Name', `${submission.firstName} ${submission.lastName}`)}
          ${detailRow('Company', submission.company)}
          ${detailRow('Email', submission.email)}
          ${detailRow('Phone', submission.phone)}
          ${detailRow('Project location', submission.projectLocation)}
          ${detailRow('Project type', submission.projectType)}
        </table>
        <div style="padding:20px 28px 28px;border-top:1px solid #d9cfb8">
          <p style="margin:0 0 10px;color:#746b5a;font-size:13px">Project description</p>
          <div style="white-space:pre-wrap;color:#17130c;font-size:15px;line-height:1.65">${escapeHtml(submission.projectDescription)}</div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  const submission = readSubmission(payload);

  if (submission.website) {
    return NextResponse.json({ ok: true, message: 'Thank you. Your project enquiry has been received.' });
  }

  const missingFields = requiredFields.filter((field) => !submission[field]);
  const validProjectType = projectTypeOptions.some((option) => option === submission.projectType);

  if (missingFields.length || !isValidEmail(submission.email) || !validProjectType) {
    return NextResponse.json(
      { ok: false, message: 'Please complete all required fields with a valid email address and project type.' },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;
  const toEmail = process.env.TECHNOLOGY_CONTACT_FORM_TO_EMAIL;

  if (!resendApiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { ok: false, message: 'Project enquiry delivery is not configured yet. Please try again later.' },
      { status: 503 },
    );
  }

  const resend = new Resend(resendApiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: submission.email,
    subject: `[Black Opal Technologies] ${submission.projectType} enquiry`,
    text: buildTextEmail(submission),
    html: buildHtmlEmail(submission),
    headers: { 'X-Entity-Ref-ID': `technology-contact-${Date.now()}` },
  });

  if (error) {
    console.error('Failed to send Black Opal Technologies project enquiry');
    return NextResponse.json(
      { ok: false, message: 'The project enquiry could not be delivered. Please try again later.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, message: 'Thank you. Your project enquiry has been received.' });
}
