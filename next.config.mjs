/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // In Production, It must be changed to your domain
        hostname: '*',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig
