/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Tells Next.js to export your app as static HTML/CSS/JS
  basePath: '/finacial-tracker-0.2', // Matches your GitHub repository name
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js default image optimization
  },
};

module.exports = nextConfig;
