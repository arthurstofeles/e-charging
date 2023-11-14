import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "@/views/HomeView.vue"),
  },
  {
    path: "/admin",
    name: "DefaultLayout",
    component: () =>
      import(/* webpackChunkName: "DefaultLayout" */ "../layouts/DefaultLayout.vue"),
      children: [
        {
          path: "/",
          name: 'FaturasView',
          component: () =>
            import(/* webpackChunkName: "FaturasView.vue===" */ "@/views/FaturasView.vue"),
        },
        {
          path: "/media",
          name: 'MediasView',
          component: () =>
            import(/* webpackChunkName: "MediasView" */ "@/views/MediasView.vue"),
        },
      ]
  },
  {
    path: "/login",
    name: "LoginView",
    component: () =>
      import(/* webpackChunkName: "LoginView" */ "../views/LoginView.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
