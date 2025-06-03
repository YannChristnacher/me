// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxt/eslint'],
  css: [
      '~/assets/css/tailwind.css',
      "~/assets/css/app.scss"
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
