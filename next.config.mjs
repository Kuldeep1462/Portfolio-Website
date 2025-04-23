/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Required for static export (replaces `next export`)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // ✅ Required for static export if using next/image
  },
}

export default nextConfig
