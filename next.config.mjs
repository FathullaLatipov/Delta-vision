/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Disable TypeScript type checking during build (this is a JavaScript project)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during build to speed up deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
