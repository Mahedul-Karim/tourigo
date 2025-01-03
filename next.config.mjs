/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*",
          },
          {
            protocol: "http",
            hostname: "*",
          },
        ],
      },
      experimental:{
        missingSuspenseWithCSRBailout:false
      }
};

export default nextConfig;
