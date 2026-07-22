/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dubaifintechsummit.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
