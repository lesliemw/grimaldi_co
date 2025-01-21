/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cosgiuqkjtcjqothjhzy.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
