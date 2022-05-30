import { createRouter, createWebHistory } from 'vue-router'
  //import HomeView from '../views/HomeView.vue';
  //import App from '../App.vue'

  import newProjects from '../views/newProjects.vue'
  import searchResults from '../views/searchResults.vue'
  import projectView from '../views/project-View.vue'
  import tasksBro from '../views/tasks-bro.vue'
  import phaseView from '../views/phase-view.vue'

const routes = [
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

export default router
