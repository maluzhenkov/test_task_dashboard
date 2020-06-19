import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Dashboard.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/dashboard",
      alias: "/",
      name: "Dashboard",
      component: Home,
    },
    {
      path: "/new_card",
      name: "NewCard",
      component: () => import("@/views/NewCard.vue"),
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
