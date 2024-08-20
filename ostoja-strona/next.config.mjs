/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {

        fetches: {
          fullUrl: true,
        },
      },

      typescript:{
        tsconfigPath: './tsconfig.json',
        ignoreBuildErrors: true,
      }
};

export default nextConfig;
