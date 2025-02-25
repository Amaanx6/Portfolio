import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"], // Split three.js into its own chunk
        },
      },
    },
    chunkSizeWarningLimit: 500, // Adjust if necessary
  },
});
