/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/portfolio' : '',
  assetPrefix: isGithubPages ? '/portfolio/' : '',
}

export default nextConfig