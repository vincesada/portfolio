/** @type {import('next').NextConfig} */

// Detect if we're building on GitHub Actions (GitHub Pages)
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // Only apply these when deploying to GitHub Pages
  ...(isGithubPages && {
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
  }),
}

export default nextConfig