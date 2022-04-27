import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import TQM from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/tqm',
    name: 'TQM',
    component: TQM
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
