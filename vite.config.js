import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  base: "/Graduation_of_2025/",
  plugins: [react()],
});
