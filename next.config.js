/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // serverActions:true
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "universalmotorstorage.blob.core.windows.net",
        port: "",
        pathname: "/umimages/**",
      },

    ],
  },
};

module.exports = nextConfig;
