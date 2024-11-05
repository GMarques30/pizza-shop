import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // Pasta onde o build será gerado
    assetsDir: "assets", // Diretório para assets estáticos (CSS, imagens, etc.)
    sourcemap: true, // Gera um arquivo de mapa para debugging
    minify: "esbuild", // Usa esbuild para minificação (padrão)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
