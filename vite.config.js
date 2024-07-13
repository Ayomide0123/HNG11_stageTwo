import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.timbu.cloud",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/extrainfo": {
        target: "https://api.timbu.cloud",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/extrainfo/, ""),
      },
    },
  },
});
