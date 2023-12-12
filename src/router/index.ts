import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import feedsPage from "../pages/feeds/feedsPage.vue";
import storyPage from "../pages/story/storyPage.vue";
import authPage from "../pages/auth/authPage.vue";
import NotFound from "../components/NotFound/NotFound.vue";

import * as api from "../api";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "feedsPage",
    component: feedsPage,
  },
  {
    path: "/auth",
    name: "authPage",
    component: authPage,
  },
  {
    path: "/stories/:openedSlide?",
    name: "stories",
    component: storyPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name == "authPage";
  const token = localStorage.getItem("token");
  if (token !== null) {
    next(authRoute ? { name: "feedsPage" } : null);
  } else {
    next(authRoute ? null : { name: "authPage" });
  }
});

export default router;
