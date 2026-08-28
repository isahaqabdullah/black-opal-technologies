/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.blackopaltechnologies.com' }],
        destination: 'https://blackopaltechnologies.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
