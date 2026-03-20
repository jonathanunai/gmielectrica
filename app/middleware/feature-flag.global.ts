export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/en-construccion') return

  const cookie = useCookie('shownew', { maxAge: 60 * 60 * 24 * 30 })

  if ('show-new' in to.query) {
    cookie.value = '1'
  }

  if (cookie.value) return

  return navigateTo('/en-construccion')
})
