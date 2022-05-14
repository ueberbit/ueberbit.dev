if (import.meta.env.DEV) {
  Object.assign(window, {
    '__DEV__': import.meta.env.DEV
  })
}
