import { getCurrentInstance, onUpdated } from 'vue'
import { adoptStyles } from '~/api/styles'

export function useHMR() {
  onUpdated(() => {
    const shadowRoot = getCurrentInstance()?.vnode?.el?.getRootNode()
    const styles = Array.from(document.querySelectorAll('style')).find(el => el.innerHTML.includes('tailwind'))?.textContent
    styles && adoptStyles(shadowRoot, [styles], 'tailwind')
  })
}

// without setup:
// updated() {
//   const styles = Array.from(document.querySelectorAll('style')).find(el => el.innerHTML.includes('tailwind'))?.textContent
//       styles && adoptStyles(this.$.shadowRoot, [styles], 'tailwind')
// }
