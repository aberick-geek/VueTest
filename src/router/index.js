import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
/*   {
      path: '/',
      name: 'home',
      component: HomeView
    },
*/
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // ce chemin permet d'accéder au dashboard des personnes inscrits dans la plateform
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/Acceuil',
      name: 'acceuil',
      // ce chemin permet d'accéder a la page d'acceuil du dashboard de l'abonné
      component: () => import('../components/home-body.vue')
    },
    {
      path: '/notification',
      name: 'notification',
      // ce chemin permet d'accéder a la page des notifications du dashboard de l'abonné
      component: () => import('../components/notification-body.vue')
    },
    {
      path: '/favoris',
      name: 'favoris',
      // ce chemin permet d'accéder a la page des favoris du dashboard de l'abonné
      component: () => import('../components/favoris-body.vue')
    },
    {
      path: '/reglages',
      name: 'reglages',
      // ce chemin permet d'accéder a la page de reglages du dashboard de l'abonné
      component: () => import('../components/reglages-body.vue')
    },
    {
      path: '/aides',
      name: 'aides',
      // ce chemin permet d'accéder a la page d'acceuil dy dashboard de l'abonné
      component: () => import('../components/aide-body.vue')
    },
  ]
})

export default router
