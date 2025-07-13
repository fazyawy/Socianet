import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react(), nodePolyfills()],
	server: {
		port: 3000,
	}
})
