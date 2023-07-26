import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://dk-dev10.github.io/timerpomodoro',
  plugins: [react()],
})
