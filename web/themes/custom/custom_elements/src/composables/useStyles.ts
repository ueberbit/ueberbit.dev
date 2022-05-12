import { ref, onMounted, getCurrentInstance } from 'vue'
import { adoptStyles } from '../api/styles'

export const useStyles = () => {
  const shadowRoot = ref<ShadowRoot>()

  onMounted(() => {
    const instance = getCurrentInstance()
    if (!instance) return
    debugger
    shadowRoot.value = instance.vnode?.el?.getRootNode()
    if (!shadowRoot.value) return

    // @ts-expect-error
    const styles = instance.type.styles.join('')

    // Use __hmrId as UUID for replacing styles, instead of adding new ones every time.
    // @ts-expect-error
    const __hmrId = instance.type.__hmrId

    if (instance.isCE) {
      // Don't remove styletag in dev, because runtime would try to remove non existing dom element on update.
      // if (import.meta.env.DEV || !removeStyleTag) return
      // Not the best to let the runtime first add a styletag and than remove it, but we don't want to touch the vue runtime code.
      shadowRoot.value
        .querySelectorAll('style')
        .forEach((style) => style.remove())
    }
    adoptStyles(shadowRoot.value, styles, __hmrId)
  })
}