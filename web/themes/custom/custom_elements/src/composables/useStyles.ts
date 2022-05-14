import { ref, onMounted, getCurrentInstance } from 'vue'
import { adoptStyles } from '../api/styles'

export const useStyles = () => {
  const renderRoot = ref<ShadowRoot|Document>()

  onMounted(() => {
    const instance = getCurrentInstance()
    if (!instance) return
    // debugger
    renderRoot.value = instance.vnode?.el?.getRootNode()
    if (!renderRoot.value) return

    // @ts-expect-error
    if(!instance.type.styles) return
    // @ts-expect-error
    const styles = instance.type.styles.join('')

    // Use __hmrId as UUID for replacing styles, instead of adding new ones every time.
    // @ts-expect-error
    const __hmrId = instance.type.__hmrId

    if (renderRoot.value instanceof ShadowRoot) {
      adoptStyles(renderRoot.value as ShadowRoot, [styles], __hmrId)
    }
  })
}