// Entry points into the product app. Set the real URLs via env
// (VITE_APP_SIGNUP_URL / VITE_APP_LOGIN_URL); until then they fall back to '#'.
export const appLinks = {
  signup: import.meta.env.VITE_APP_SIGNUP_URL || '#',
  login: import.meta.env.VITE_APP_LOGIN_URL || '#'
} as const

export type AppLink = keyof typeof appLinks
