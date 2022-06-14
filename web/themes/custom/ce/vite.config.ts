import { defineConfig } from 'vite'
import { presetAttributify, presetUno } from 'unocss'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import { ceStyles, autoImportUnoPlaceholder, scanTwig, unoCascadeLayer, transformHTML } from './src/api/vite-plugins'
import mkcert from 'vite-plugin-mkcert'
import Unocss from 'unocss/vite'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/themes/custom/ce/dist/',
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // autoImportUnoPlaceholder,
    transformHTML(),
    ceStyles,
    Unocss({
      mode: 'shadow-dom',
      presets: [
        presetAttributify({ /* options */ }),
        presetUno(),
      ],
      transformers: [
        transformerVariantGroup(),
      ],
    }),
    Unocss({
      presets: [
        presetAttributify({ /* options */ }),
        presetUno(),
      ],
      transformers: [
        transformerVariantGroup(),
      ],
      include: [/\.html.twig$/, /\.ce.vue$/]
    }),
    vue({
      customElement: true,
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-')
        }
      }
    }),
    scanTwig,
    unoCascadeLayer,
    mkcert()
  ],
  build: {
    // manifest: true,
    rollupOptions: {
      // input: 'src/main.ts',
      output: {
        manualChunks: {
          'vue.runtime.esm-browser.prod': ['vue'],
        },
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`
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
