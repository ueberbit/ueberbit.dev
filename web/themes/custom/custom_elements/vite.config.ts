import { defineConfig } from 'vite'
import { presetAttributify, presetUno } from 'unocss'
import vue from '@vitejs/plugin-vue'
// import { tailwindHMR } from './src/api/vite-plugin-twhmr'
import { ceStyles, autoImportUnoPlaceholder } from './src/api/vite-plugin-styles'
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
    // autoImportUnoPlaceholder,
    ceStyles,
    Unocss({
      mode: 'shadow-dom',
      presets: [
        presetAttributify({ /* options */ }),
        presetUno(),
      ],
    }),
    Unocss({
      presets: [
        presetAttributify({ /* options */ }),
        presetUno(),
      ],
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
    {
      name: 'twig',
      transform(src, id) {
        if (/\.(twig)$/.test(id)) {
          console.log(id)
          return {
            code: '',
            map: null // provide source map if available
          }
        }
      },
    },
    {
      name: 'abc',
      transform(src, id) {
        if (/\__uno.css$/.test(id)) {
          console.log(src)
          return {
            code: `/*unocss*/\n${src}`,
            map: null
          }
        }
      },
    },
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
