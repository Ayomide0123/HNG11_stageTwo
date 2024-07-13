import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy:
      process.env.NODE_ENV === "development"
        ? {
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
          }
        : {},
  },
});
