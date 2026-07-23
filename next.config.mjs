/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/dubaifintechsummit.com' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
