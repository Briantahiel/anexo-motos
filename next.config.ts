import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// })
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})

module.exports = withPWA({
  reactStrictMode: true,
  turbopack: {}, // 👈 evita conflicto
})

export default nextConfig;
