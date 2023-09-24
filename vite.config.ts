import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsConfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default ({ command }) => {
  const isProduction = command === "build";

  return defineConfig({
    plugins: [react(), tsConfigPaths()],
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
    build: {
      outDir: isProduction ? "dist" : "build", // Pasta de saída para produção e desenvolvimento
      assetsDir: isProduction ? "assets" : "", // Pasta de ativos para produção
      minify: isProduction, // Minificar código apenas em produção
    },
  });
}