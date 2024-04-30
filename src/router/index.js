import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/mainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
  ],
});

export default router;
