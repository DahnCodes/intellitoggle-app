// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],

  modules: [
    // ✅ correct Nuxt 3 Tailwind module
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/fonts',
  ],




  fonts: {
    families: [
      {
        name: 'Jost',
        provider: 'google',
        weights: [400, 500, 600, 700],
      },
    ],
  },
})
