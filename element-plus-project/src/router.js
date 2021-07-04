// Vue Router 4
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView";
import {defineAsyncComponent} from "vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {   path: '/about',
        component:
          defineAsyncComponent({
            loader: () => import('./views/AboutView')
          })
    },
  ],
});
