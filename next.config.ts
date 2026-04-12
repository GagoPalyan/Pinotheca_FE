import isDev from '@/utils/helpers/isDev.utils';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: isDev() ? 'http' : 'https',
        hostname: process.env.HOST as string,
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/cloud/:path*',
        destination: process.env.CLOUDINARY_URL + '/:path*',
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
