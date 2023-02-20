const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  rewrites: async () => ([
    {
      source: '/:any*',
      destination: '/',
    }
  ])
};

module.exports = withVanillaExtract(nextConfig);
