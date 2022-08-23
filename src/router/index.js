import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
     path: '/',
     name: 'inscription',
     // ce chemin permet d'accéder au dashboard des personnes inscrits dans la plateform
     component: () => import('../components/pages/insciption.vue')
   },
   {
      path: '/dashboard',
      name: 'dashboard',
      // ce chemin permet d'accéder au dashboard des personnes inscrits dans la plateform
      component: () => import('../components/pages/dashboard.vue'),
      children: [
            {
              path: '/dashboard/',
              name: 'acceuil',
              // ce chemin permet d'accéder a la page d'acceuil du dashboard de l'abonné
              component: () => import('../components/dashboard/home-body.vue')
            },
            {
              path: '/dashboard/notification',
              name: 'notification',
              // ce chemin permet d'accéder a la page des notifications du dashboard de l'abonné
              component: () => import('../components/dashboard/notification-body.vue')
            },
            {
              path: '/dashboard/favoris',
              name: 'favoris',
              // ce chemin permet d'accéder a la page des favoris du dashboard de l'abonné
              component: () => import('../components/dashboard/favoris-body.vue')
            },
            {
              path: '/dashboard/reglages',
              name: 'reglages',
              // ce chemin permet d'accéder a la page de reglages du dashboard de l'abonné
              component: () => import('../components/dashboard/reglages-body.vue')
            },
            {
              path: '/dashboard/aides',
              name: 'aides',
              // ce chemin permet d'accéder a la page d'acceuil du dashboard de l'abonné
              component: () => import('../components/dashboard/aide-body.vue')
            },
    ]
   }
  ]
})

export default router
