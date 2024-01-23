// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Home',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/evaluate',
        name: 'Evaluate',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Evaluate.vue'),
      },
      {
        path: '/docs',
        name: 'Docs',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Docs.vue'),
      },
    ],
  },
  {
    path: '/public',
    component: () => import('@/layouts/auth/Default.vue'),
    meta: { requiresUnauth: true },
    children: [
      {
        path: '',
        name: 'PublicHome',
        meta: { requiresUnauth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/layouts/auth/Home.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        meta: { requiresUnauth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/layouts/auth/Login.vue'),
      },
      {
        path: '/signup',
        name: 'Signup',
        meta: { requiresUnauth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/layouts/auth/Signup.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isLoggedIn;

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'PublicHome' });
  } else if (to.matched.some(record => record.meta.requiresUnauth) && isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router
