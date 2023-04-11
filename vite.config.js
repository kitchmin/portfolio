import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:  '/kitchmin.github.io/',
  plugins: [react()]
})
