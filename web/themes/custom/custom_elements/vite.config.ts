import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { tailwindHMR } from './src/api/vite-plugin-twhmr'
import mkcert from 'vite-plugin-mkcert'
import Unocss from 'unocss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // tailwindHMR,
    Unocss({
      // mode: 'shadow-dom',
      include: [/\.html.twig$/]
    }),
    vue({
      customElement: true,
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-')
        }
      }
    }),
    mkcert()
  ],
  build: {
    // lib: {
    //   entry: 'src/main.ts',
    //   formats: ['es'],
    // },
    rollupOptions: {
      input: 'src/main.ts',
      output: {
        manualChunks: {
          'vue.runtime.esm-browser.prod': ['vue'],
        }
      }
    },
  },
  server: {
    https: true,
    strictPort: true,
    port: 3000,
    hmr: {
      host: 'localhost',
    },
  }
})
