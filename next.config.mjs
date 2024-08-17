/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {


    remotePatterns: [
      {
        protocol: "https",
        hostname: "youess-47031e.ingress-comporellon.ewp.live",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
