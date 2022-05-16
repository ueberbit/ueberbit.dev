
declare global {
  interface CSSStyleSheet {
    replaceSync: Function
    __hmrId: string
  }
  interface RenderRoot {
    adoptedStyleSheets: Array<CSSStyleSheet>
  }

  interface ShadowRoot extends RenderRoot {}
  interface Document extends RenderRoot {}
  interface Window {
    sheets: Record<string,CSSStyleSheet>
    styles: Record<string,string>
    swup: any
  }

}

export {}
