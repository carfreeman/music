import NProgress from "nprogress"

export default (router) => {
  NProgress.configure({ showSpinner: false })
  
  router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })

  router.afterEach(NProgress.done)
}