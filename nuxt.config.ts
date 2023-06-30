// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
        },
      ],
      script: [{}],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@formkit/nuxt'],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/styles.css',
  ],
})
