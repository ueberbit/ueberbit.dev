/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
 export const supportsAdoptingStyleSheets =
 window.ShadowRoot &&
 'adoptedStyleSheets' in Document.prototype &&
 'replaceSync' in CSSStyleSheet.prototype

/**
* Add constructed Stylesheet or style tag to Shadowroot of VueCE.
* @param renderRoot The shadowroot of the vueCE..
* @param styles The styles of the Element.
* @param __hmrId hmr id of vite used as an UUID.
*/
export const adoptStyles = (
 renderRoot: ShadowRoot,
 styles: string[] | CSSStyleSheet,
 __hmrId: string | undefined
) => {

  if(styles instanceof CSSStyleSheet) {
    renderRoot.adoptedStyleSheets = [styles]
    return
  }

  const css = styles.join('')

 if (supportsAdoptingStyleSheets) {
   const sheets = renderRoot.adoptedStyleSheets || []
   const oldSheet = import.meta.env.DEV && __hmrId ? sheets.find((sheet) => sheet.__hmrId === __hmrId) : false

   // Check if this StyleSheet exists already. Replace content if it does. Otherwise construct a new CSSStyleSheet.
   if (oldSheet) {
     oldSheet.replaceSync(css)
   } else {
     const styleSheet: CSSStyleSheet = new CSSStyleSheet()
     if(import.meta.env.DEV && __hmrId)
       styleSheet.__hmrId = __hmrId
     styleSheet.replaceSync(css)
     renderRoot.adoptedStyleSheets = [
       ...renderRoot.adoptedStyleSheets || [],
       styleSheet,
     ]
   }
 } else {
   const existingStyleElements = renderRoot.querySelectorAll('style')
   const oldStyleElement = import.meta.env.DEV && __hmrId ? Array.from(existingStyleElements).find(
     (sheet) => sheet.title === __hmrId
   ) : false

   // Check if this Style Element exists already. Replace content if it does. Otherwise construct a new HTMLStyleElement.
   if (oldStyleElement) {
     oldStyleElement.innerHTML = css
   } else {
     const styleElement = document.createElement('style')
     if(import.meta.env.DEV && __hmrId)
       styleElement.title = __hmrId
     styleElement.innerHTML = css
     renderRoot.appendChild(styleElement)
   }
 }
}

export const baseStyles = `
  :host {
    box-sizing: border-box;
    display: block;
  }
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
  [hidden] {
    display: none !important;
  }
`