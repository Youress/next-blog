/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {


    remotePatterns: [
      {
        protocol: "https",
        hostname: "growtaller-47031e.ingress-haven.ewp.live",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
