import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CharactersView from "../views/CharactersView.vue";
import SingleCharactersView from "../views/SingleCharactersView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CharactersList",
    component: CharactersView,
  },
  {
    path: '/Character/:id',
    name: 'SingleCharacter',
    props: true,
    component: SingleCharactersView
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
