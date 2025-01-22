const isLocalhost =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1'

export const BACKEND_URL = isLocalhost
  ? import.meta.env.VITE_APP_BASE_URL_BACKEND_LOCAL
  : import.meta.env.VITE_APP_BASE_URL_BACKEND
