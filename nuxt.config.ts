// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
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