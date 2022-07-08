import { readFileSync, writeFileSync } from 'fs'
import MagicString from 'magic-string'
import type { Plugin, ResolvedConfig } from 'vite'

/**
 * Autoimport useStyles composable for adopting styles.
 */
export const ceStyles: Plugin = {
  name: 'vite-plugin-styles',
  enforce: 'pre',
  transform(code: string, id: string) {
    if (/vue$/.test(id)) {
      const setupMatch = code.match(/<script.*setup.*>/g )
      if(setupMatch) {
        const importMatch = code.match(/<script.*setup.*>(.|\n|\r)*import.*\n/g)
        const last = importMatch ? importMatch.at(-1) : false
        const s = new MagicString(code)
        const index = last ? code.indexOf(last) + last.length : code.indexOf(setupMatch[0]) + setupMatch[0].length

        s.appendLeft(index, `
          import { useStyles } from '~/api/useStyles.ts'
          useStyles()
        `)
        // console.log(s.toString())
        return {
          code: s.toString(),
          map: s.generateMap({ hires: true }),
        }
      }
    }

    return code
  },
}

/**
 * Automagically insert unocss placeholder.
 */
export const autoImportUnoPlaceholder: Plugin = {
  name: 'vite-plugin-auto-import-uno-placeholder',
  enforce: 'pre',
  transform(code: string, id: string) {
    if (/vue$/.test(id)) {
      const styleMatch = code.match(/<style.*>/g )
      const s = new MagicString(code)
      if(styleMatch) {
        const last = styleMatch ? styleMatch.at(-1) : false
        const index = last ? code.indexOf(last) + last.length : code.indexOf(styleMatch[0]) + styleMatch[0].length

        s.appendLeft(index, `
        @unocss-placeholder
        `)

      } else {
        s.appendLeft(s.length(), `<style>@unocss-placeholder</style>`)
      }

      return {
        code: s.toString(),
        map: s.generateMap({ hires: true }),
      }

    }

    return code
  },
}

/**
 * Automagically insert unocss placeholder.
 */
export const unoPlaceholder: Plugin = {
  name: 'vite-plugin-uno-placeholder',
  enforce: 'pre',
  transform(code: string, id: string) {
    if (/vue$/.test(id)) {
      const s = new MagicString(code)
      s.replace('@unocss-placeholder;', '@unocss-placeholder')

      return {
        code: s.toString(),
        map: s.generateMap({ hires: true }),
      }

    }

    return code
  },
}

/**
 * Include *.twig files in unocss scanning.
 */
export const scanTwig: Plugin = {
  name: 'twig',
  transform(src, id) {
    if (/\.(twig)$/.test(id)) {
      return {
        code: '',
        map: null // provide source map if available
      }
    }
  }
}

/**
 * Wrap unocss in "uno" css layer.
 */
export const unoCascadeLayer: Plugin = {
  name: 'vite-uno-css-layer',
  transform(src, id) {
    if (/\__uno.css$/.test(id)) {
      return {
        code: `
          @layer uno {
            ${src}
          }
        `,
        map: null
      }
    }
  }
}

/**
 *
 * @returns
 */
export const transformHTML = (): Plugin => {
  let config: ResolvedConfig

  return {
    name: 'vite-twig-transform',
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    transformIndexHtml(html) {
      if (config.command === 'build') {
        const code = html
          .replace(/<head>/,`{% block head %}`)
          .replace(/<body>/,`{% block body %}`)
          .replace(/(<\/head>)|(<\/body>)/g,`{% endblock %}`)
          .replace(/.*\/\/localhost:.*/g, '')
        return code
      }
    },
    buildStart() {
      if (config.command === 'serve') {
        const index = readFileSync('./index.html')
        const code = index
          .toString()
          .replace(/<head>/,`{% block head %}`)
          .replace(/<body>/,`{% block body %}`)
          .replace(/\/src\//g,`https://localhost:3000/src/`)
          .replace(/<\/body>/g,`<script type="module" src="https://localhost:3000/@vite/client"></script>\n</body>`)
          .replace(/(<\/head>)|(<\/body>)/g,`{% endblock %}`)
        writeFileSync('./dist/index.html', code)
      }
    }
  }
}
