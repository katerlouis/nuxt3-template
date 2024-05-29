// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: 'src/',

  css: ['@/styles/reset.css'],

  modules: [
    [
      'nuxt-lodash', {
        prefix: false,
        prefixSkip: false,
        upperAfterPrefix: false,
        exclude: ['delay'],
      },
    ],
    '@vueuse/nuxt',
    '@pinia/nuxt',
    [
      '@nuxt/eslint', {
        config: {
          stylistic: {
            semi: false,
            quotes: 'single',
          },
        },
      },
    ],
  ],

  imports: {
    dirs: ['stores'],
  },

  typescript: {
    tsConfig: {
      // apparently we cant use `@/` here and have to go relatively from ".nuxt/tsconfig.json"
      // apparently the `srcDir` from this config also isn't taken into account
      include: ['../src/types/*.d.ts'],
      compilerOptions: {
        noImplicitAny: false,
      },
    },
  },
})
