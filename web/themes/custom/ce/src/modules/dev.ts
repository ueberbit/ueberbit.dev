Object.assign(window, {
  '__DEV__': import.meta.env.DEV
})

if (import.meta.env.DEV) {
  fetch('https://localhost:3000/web/themes/custom/ce/')
}

export {}
