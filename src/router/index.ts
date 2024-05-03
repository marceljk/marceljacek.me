// Composables
import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from "./../pages/HomeView.vue";

const routes = [
  { path: '/:pathMatch(.*)*', redirect: "/" },
  {
    path: "/", component: HomeView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
