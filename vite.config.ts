import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-root-favicon',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/favicon.ico' || req.url === '/favicon.svg' || req.url === '/favicon.png' || req.url === '/logo.png') {
            req.url = '/XL-DRIV' + req.url;
          }
          next();
        });
      }
    }
  ],
  base: '/XL-DRIV/',
})
