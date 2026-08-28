import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O workspace acima do projeto possui um package-lock.json alheio;
  // fixamos a raiz do Turbopack nesta pasta para evitar inferência errada.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
