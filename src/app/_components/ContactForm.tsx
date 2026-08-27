'use client';

import { useState, type FormEvent } from 'react';
import { projectTypeOptions } from '../_data/site';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/technology-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'The enquiry could not be sent. Please try again.');
      }

      setSubmissionState('success');
      setMessage(result.message || 'Thank you. Your project enquiry has been received.');
      form.reset();
    } catch (error) {
      setSubmissionState('error');
      setMessage(error instanceof Error ? error.message : 'The enquiry could not be sent. Please try again.');
    }
  }

  return (
    <form className="tech-contact-form" onSubmit={handleSubmit}>
      <div className="tech-form-grid">
        <label>
          <span>First Name</span>
          <input name="firstName" type="text" autoComplete="given-name" maxLength={80} required />
        </label>
        <label>
          <span>Last Name</span>
          <input name="lastName" type="text" autoComplete="family-name" maxLength={80} required />
        </label>
        <label>
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" maxLength={120} required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={160} required />
        </label>
        <label>
          <span>Phone <small>(optional)</small></span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label>
          <span>Project Location</span>
          <input name="projectLocation" type="text" autoComplete="address-level2" maxLength={120} required />
        </label>
        <label className="tech-form-full">
          <span>Service / Project Type</span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>
              Select the closest service
            </option>
            {projectTypeOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="tech-form-full">
          <span>What do you need delivered or improved?</span>
          <textarea name="projectDescription" rows={7} maxLength={4000} required />
        </label>
        <label className="tech-honeypot" aria-hidden="true">
          <span>Website</span>
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="tech-form-submit">
        <button type="submit" disabled={submissionState === 'submitting'}>
          {submissionState === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        </button>
        <p>We will use these details only to review and respond to your enquiry.</p>
      </div>

      {message ? (
        <p className={`tech-form-message is-${submissionState}`} role={submissionState === 'error' ? 'alert' : 'status'}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
