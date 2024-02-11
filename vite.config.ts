import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import spotlightSidecar from '@spotlightjs/sidecar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),spotlightSidecar()],
  
})
