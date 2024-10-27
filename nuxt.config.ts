// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-oidc-auth'],
  oidc: {
    providers: {
      auth0: {
        redirectUri: "http://localhost:3000/auth/auth0/callback",
        baseUrl: process.env.NUXT_OIDC_PROVIDERS_AUTH0_BASE_URL,
        clientId: "",
        clientSecret: "",
        // skipAccessTokenParsing: true,
        scope: ["openid", "profile", "email"],
      },
    },
  },})