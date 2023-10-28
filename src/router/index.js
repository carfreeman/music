import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
//import AboutView from '@/views/AboutView.vue'
import { useUserStore } from '@/stores/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('@/views/ManageView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/song/:id',
    name: 'song',
    component: () => import('@/views/SongView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    //component: () => import('@/views/NotFound.vue'),
    redirect: { name: 'home' }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
})

//guardia de navegacion global
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    let userStore = useUserStore()
    if (userStore.userLoggedIn) {
      next()
    } else {
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

export default router
