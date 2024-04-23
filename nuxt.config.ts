
export default defineNuxtConfig({
    runtimeConfig: {
      public: {
        appBaseUrl: 'https://api.zekrimarket.com'
      }
    },
    css: ['~/assets/css/index.css','~/assets/css/fonts/icons/icons.css','~/assets/css/fonts/iconmarket.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    modules: [
      'nuxt-mapbox',
      '@pinia/nuxt',
      'nuxt-swiper'
    ],
    pinia: {
      autoImports: [
        'defineStore',
      ],
    },
    mapbox: {
      accessToken: 'pk.eyJ1IjoiaHNuZW16ZWQiLCJhIjoiY2xvcGdxOTI4MGEweTJpazRmM2JsYjA5YSJ9.8eqD-GBF4CO9Ma8aSYlM8A'
    },
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        htmlAttrs: {
          dir: 'rtl'
        },
        title: 'فروشگاه لوازم خانگی ذکری مارکت',
        meta: [
          { name: 'description', content: 'My amazing site.' }
        ],
        bodyAttrs: {
          class: 'font-fa'
        }
      }
    },

})
