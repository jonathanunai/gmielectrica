import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/content', '@nuxtjs/sitemap'],
  vite: { plugins: [tailwindcss(),], },

  site: {
    url: 'https://gmcolaborativos.com',
    name: 'GM Colaborativos',
  },

  sitemap: {
    exclude: ['/en-construccion'],
  },

  image: {
    quality: 80,
    format: ['webp', 'jpeg'],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      titleTemplate: '%s | GM Colaborativos',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:site_name', content: 'GM Colaborativos' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_ES' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },
})
