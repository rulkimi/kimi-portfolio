import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', redirect: { path: '/about' } }, 
  { path: '/about', component: () => import('@/views/AboutMe.vue') },
  { path: '/experience', component: () => import('@/views/WorkExperience.vue') },
  { path: '/projects', component: () => import('@/views/MyProjects.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;