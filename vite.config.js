import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // quitar cuando no se use github pages
  base: '/',
  //base: '/landing-react-cursos/', // <--- importante para GH Pages
})
