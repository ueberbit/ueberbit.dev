// import { supportsAdoptingStyleSheets } from '~/api/styles'
// import { adoptStyles } from '~/api/styles'
// import '~/styles/tailwind.css'
// import 'uno.css'

/**
 * Extract tailwind css from the loaded css file.
 */
// const tailwind = import.meta.env.DEV
//   ? unocss : Array.from((document.querySelectorAll('link[title="tailwind"]')[0] as HTMLStyleElement).sheet?.cssRules || []).reduce((acc, curr: any) => acc + curr.cssText, '')

// const tailwind = import.meta.env.DEV
//   ? Array.from(document.querySelectorAll('style')).find(el => el.innerHTML.includes('/*unocss*/'))?.textContent : Array.from((document.querySelectorAll('link[title="tailwind"]')[0] as HTMLStyleElement).sheet?.cssRules || []).reduce((acc, curr: any) => acc + curr.cssText, '')

// /**
//  * Attach tailwind to window object either as a constructed CSSStylesheet or as a plain string.
//  * Vue Custom Elements use attach tailwind styles to their shadow dom.
//  */
// if(supportsAdoptingStyleSheets) {
//   const sheet = new CSSStyleSheet()
//   if(import.meta.env.DEV) sheet.__hmrId = 'tailwind'
//   sheet.replaceSync(tailwind)
//   Object.assign(window, {tw: {sheet: sheet}})
// } else {
//   Object.assign(window, {tw: {styles: tailwind}})
// }

export {}
