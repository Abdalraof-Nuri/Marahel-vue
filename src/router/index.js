import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue';
// import user from '../views/login-rigister.vue'

import newProjects from '../views/newProjects.vue'
import searchResults from '../views/searchResults.vue'
import projectView from '../views/project-View.vue'
import tasksBro from '../views/tasks-bro.vue'
import phaseView from '../views/phase-view.vue'
import loginRigister from '../views/login-rigister.vue'
import cookie from 'vue-cookies'
import logoutView from '../views/logout-view.vue'
import LandingPage from '../views/LandingPage'


const routes = [
  {
    path: '/Landing',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'login-rigister',
    component: loginRigister
  },
  {
    path: '/logout',
    name: 'logout',
    component: logoutView
  },
  {
    path: '/',
    name: 'home',
    component: newProjects
  },
  {
    path: '/searchResults',
    name: 'searchResults',
    component: searchResults,
    props: true

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/projectView',
    name: 'projectView',
    component: projectView
  },
  {
    path: '/phaseview',
    name: 'phaseView',
    component: phaseView
  },
  {
    path: '/tasks-bro',
    name: 'tasks-bro',
    component: tasksBro
  },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {


  if (!cookie.get('token') && to.name !== 'Landing' && to.name !== 'login-rigister') {

    return router.push({ name: 'Landing' })
  } else if (cookie.get('token') && to.name == 'Landing') {
    return router.push({ name: 'home' })
  }

})

export default router
