import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/Password-Generator/', // 👈 must match your repo name
    plugins: [react()],
});