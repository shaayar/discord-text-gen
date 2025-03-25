import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "discord-text-gen", // Replace with your actual repo name
  server: {
    host: true, // Allows access from external URLs
    strictPort: true, // Ensures it runs on the assigned port
    allowedHosts: [
      "shaayar.github.io" // Whitelist GitHub Pages domain
    ],
  },
});
