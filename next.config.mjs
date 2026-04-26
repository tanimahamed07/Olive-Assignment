/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all https images
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all http images
      },
    ],
  },
};

export default nextConfig;