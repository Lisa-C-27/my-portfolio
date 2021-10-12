import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import MyProjects from  './pages/MyProjects.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: MyProjects }
  ],
  scrollBehavior(to, _, savedPosition) {
    if (to.hash) {
      return { 
        el: to.hash,
        behavior: 'smooth',
       }
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { left: 0, top: 0 }
    }
}
});

export default router;