// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export', // Ensures next export works correctly
//   trailingSlash: true, // Ensures folders with index.html for S3
//   images: {
//       unoptimized: true, // Required for static export if using next/image
//       domains: ['imakesite.s3.eu-north-1.amazonaws.com']
//     },
//   assetPrefix: process.env.NODE_ENV === 'production'
//     ? 'https://imakesite.s3.eu-north-1.amazonaws.com/templates/pepsi'
//     : '',
//   basePath: '/templates/pepsi', // Needed if you're deploying the site under this S3 subfolder

//   };

//   module.exports = nextConfig;

const nextConfig = {
  output: 'export',
  assetPrefix: 'https://imakesite.s3.eu-north-1.amazonaws.com/templates/pepsi',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
