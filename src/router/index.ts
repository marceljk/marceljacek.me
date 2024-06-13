// Composables
import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from "./../pages/HomeView.vue";
import ProjectView from "./../pages/ProjectView.vue";

const routes = [
  { path: '/:pathMatch(.*)*', redirect: "/" },
  {
    path: "/", component: HomeView,
  },
  {
    path: "/project/:project", component: ProjectView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
