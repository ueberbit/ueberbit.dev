import { getCurrentInstance, onMounted, ref } from 'vue'
import type { CustomComponentInternalInstance } from '~/api/ApiCustomElements'

export const useHost = () => {
  const instance = getCurrentInstance() as CustomComponentInternalInstance
  return instance.host
}

export const useRenderRoot = () => {
  const instance = getCurrentInstance() as CustomComponentInternalInstance
  return instance.renderRoot
}

export const useSlot = (name?: string) => {
  const instance = getCurrentInstance() as CustomComponentInternalInstance
  const slot = ref<HTMLSlotElement | null>(null)
  onMounted(() => {
    slot.value = name
      ? instance.renderRoot.querySelector<HTMLSlotElement>(`slot[name=${name}]`)
      : instance.renderRoot.querySelector<HTMLSlotElement>(`slot`)
  })
  return slot
}

export const useSlotted = (name?: string) => {
  const instance = getCurrentInstance() as CustomComponentInternalInstance
  return name
    ? instance.host.querySelector(`[slot=${name}]`)
    : Array.from(instance.host.children).filter((child) => !child.hasAttribute('slot'))
}
