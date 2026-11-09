import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Si tu repo NO se llama Winareku.github.io, cambia base a '/nombre-del-repo/'
export default defineConfig({ plugins: [react()], base: '/' });
