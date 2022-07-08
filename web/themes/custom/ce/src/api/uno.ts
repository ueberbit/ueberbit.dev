import tailwindReset from '@unocss/reset/tailwind.css?raw'

/**
 * Apply css reset.
 */
export const reset = `
  @layer reset {
    ${tailwindReset}
  }
`
