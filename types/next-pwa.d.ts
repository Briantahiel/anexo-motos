declare module "next-pwa" {
  import type { NextConfig } from "next"

  type PWAConfig = {
    dest: string
    disable?: boolean
  }

  export default function withPWAInit(
    config: PWAConfig,
  ): (nextConfig: NextConfig) => NextConfig
}
