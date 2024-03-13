const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://127.0.0.1:3000/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
