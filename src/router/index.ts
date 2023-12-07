import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import feedsPage from "../pages/feeds/feedsPage.vue";
import storyPage from "../pages/story/storyPage.vue";
import authPage from "../pages/auth/authPage.vue";
import NotFound from "../components/NotFound/NotFound.vue";

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

export default router;
