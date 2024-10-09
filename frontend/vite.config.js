import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001", // The backend server
        changeOrigin: true, // Makes the request appear as if it came from the backend
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Rewrite the path if necessary
      },
    },
  },
});
