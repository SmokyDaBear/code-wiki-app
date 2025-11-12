import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/code-wiki-app/", // Updated to match repository name
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate React and React-DOM into their own chunk
          if (id.includes("react") || id.includes("react-dom")) {
            return "react";
          }
          // Separate markdown processing libraries
          if (
            id.includes("react-markdown") ||
            id.includes("remark-") ||
            id.includes("rehype-")
          ) {
            return "markdown";
          }
          // Separate syntax highlighting
          if (id.includes("highlight.js")) {
            return "highlight";
          }
          // Keep node_modules separate from app code
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    // Increase chunk size warning limit to 1MB for better performance
    chunkSizeWarningLimit: 1000,
  },
});
