import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
base: '/', // Garante que a base da URL seja a raiz
  publicDir: 'public', // Garante que a pasta public seja reconhecida
  build: {
    outDir: 'dist', // Onde os arquivos de build serão gerados
    emptyOutDir: true, // Limpa a pasta de saída antes de cada build
  },
})

