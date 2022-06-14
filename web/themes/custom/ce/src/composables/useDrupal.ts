import { ref } from 'vue'

export interface MenuItem {
  title: string
  external: boolean
  absolute: string
  relative: string
}

export const useMenu = (id: string) => {
  const menu = ref<Array<MenuItem>>()
  fetch(`${location.origin}/api/menu_items/main`)
    .then(async (fetchResponse) => {
      const response = await fetchResponse
      menu.value = await response.json()
    })

  return menu
}
