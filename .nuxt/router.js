import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b466d9a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4d037129 = () => interopDefault(import('..\\pages\\magic-link\\index.vue' /* webpackChunkName: "pages/magic-link/index" */))
const _5b5aadbf = () => interopDefault(import('..\\pages\\paymentfailure\\index.vue' /* webpackChunkName: "pages/paymentfailure/index" */))
const _6e4409a6 = () => interopDefault(import('..\\pages\\paymentsuccess\\index.vue' /* webpackChunkName: "pages/paymentsuccess/index" */))
const _55bcf58c = () => interopDefault(import('..\\pages\\privacy-policy\\index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _12dd24b0 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _bde2739c = () => interopDefault(import('..\\pages\\profile\\index\\edit.vue' /* webpackChunkName: "pages/profile/index/edit" */))
const _460e8140 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _3f28297c = () => interopDefault(import('..\\pages\\register\\index\\index.vue' /* webpackChunkName: "pages/register/index/index" */))
const _2a4eb29c = () => interopDefault(import('..\\pages\\register\\index\\details.vue' /* webpackChunkName: "pages/register/index/details" */))
const _b3effa62 = () => interopDefault(import('..\\pages\\register\\index\\upload-your-photos.vue' /* webpackChunkName: "pages/register/index/upload-your-photos" */))
const _46f3920a = () => interopDefault(import('..\\pages\\reset-password\\index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _8d2bdf58 = () => interopDefault(import('..\\pages\\profile\\change-password\\index.vue' /* webpackChunkName: "pages/profile/change-password/index" */))
const _8c2806a8 = () => interopDefault(import('..\\pages\\list\\_type.vue' /* webpackChunkName: "pages/list/_type" */))
const _0cddaa48 = () => interopDefault(import('..\\pages\\list\\_type\\stories\\_storyId.vue' /* webpackChunkName: "pages/list/_type/stories/_storyId" */))
const _f87ac384 = () => interopDefault(import('..\\pages\\list\\_type\\_id.vue' /* webpackChunkName: "pages/list/_type/_id" */))
const _e7129428 = () => interopDefault(import('..\\pages\\list\\_type\\_id.vue\\index.vue' /* webpackChunkName: "pages/list/_type/_id.vue/index" */))
const _4fa24167 = () => interopDefault(import('..\\pages\\magic-link\\_magic.vue' /* webpackChunkName: "pages/magic-link/_magic" */))
const _519eca83 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _1b466d9a,
    name: "login"
  }, {
    path: "/magic-link",
    component: _4d037129,
    name: "magic-link"
  }, {
    path: "/paymentfailure",
    component: _5b5aadbf,
    name: "paymentfailure"
  }, {
    path: "/paymentsuccess",
    component: _6e4409a6,
    name: "paymentsuccess"
  }, {
    path: "/privacy-policy",
    component: _55bcf58c,
    name: "privacy-policy"
  }, {
    path: "/profile",
    component: _12dd24b0,
    name: "profile",
    children: [{
      path: "edit",
      component: _bde2739c,
      name: "profile-index-edit"
    }]
  }, {
    path: "/register",
    component: _460e8140,
    children: [{
      path: "",
      component: _3f28297c,
      name: "register-index"
    }, {
      path: "details",
      component: _2a4eb29c,
      name: "register-index-details"
    }, {
      path: "upload-your-photos",
      component: _b3effa62,
      name: "register-index-upload-your-photos"
    }]
  }, {
    path: "/reset-password",
    component: _46f3920a,
    name: "reset-password"
  }, {
    path: "/profile/change-password",
    component: _8d2bdf58,
    name: "profile-change-password"
  }, {
    path: "/list/:type?",
    component: _8c2806a8,
    name: "list-type",
    children: [{
      path: "stories/:storyId?",
      component: _0cddaa48,
      name: "list-type-stories-storyId"
    }, {
      path: ":id?",
      component: _f87ac384,
      name: "list-type-id"
    }, {
      path: ":id.vue",
      component: _e7129428,
      name: "list-type-id.vue"
    }]
  }, {
    path: "/magic-link/:magic?",
    component: _4fa24167,
    name: "magic-link-magic"
  }, {
    path: "/",
    component: _519eca83,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
