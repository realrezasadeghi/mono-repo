import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/foundation/_variables.scss"; @import "@/assets/styles/foundation/_typography.scss"; @import "@/assets/styles/foundation/_colors.scss";`,
      },
    },
  },
});
