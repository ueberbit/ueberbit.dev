import tailwindReset from '@unocss/reset/tailwind.css?raw'
import { adoptStyles } from '~/api/styles'
import 'uno.css'

/**
 * Apply css reset.
 */
const reset = `
  @layer reset {
    ${tailwindReset}
  }
`

const resetSheet = new CSSStyleSheet()
resetSheet.replaceSync(reset)

adoptStyles(document, [reset], 'reset')

Object.assign(window, {
  // sheets: {
  //   reset: resetSheet
  // },
  styles: {
    reset,
  }
})
