import MagicString from 'magic-string'
import type { Plugin } from 'vite'

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

      // console.log(s.toString())

      return {
        code: s.toString(),
        map: s.generateMap({ hires: true }),
      }

    }

    return code
  },
}
