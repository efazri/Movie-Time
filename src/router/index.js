import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "movies",
    component: () => import("../views/MovieCategoryView.vue"),
  },
  {
    path: "/series",
    name: "series",
    component: () => import("../views/TVShowCategoryView.vue"),
  },
  {
    path: "/category/:genre",
    name: "category",
    component: () => import("../views/CategoryView.vue"),
  },
  {
    path: "/movie/:id",
    name: "movies-detail",
    component: () => import("../views/MovieView.vue"),
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../views/MovieView.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../views/PageNotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
