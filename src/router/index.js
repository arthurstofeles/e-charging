import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "@/views/HomeView.vue"),
  },
  // {
  //   path: "/admin",
  //   name: "DefaultLayout",
  //   component: () =>
  //     import(/* webpackChunkName: "DefaultLayout" */ "../layouts/DefaultLayout.vue"),
  //     children: [
  //       {
  //         path: "/",
  //         name: 'IdeiaListView',
  //         component: () =>
  //           import(/* webpackChunkName: "IdeiaListView" */ "@/views/IdeiaListView.vue"),
  //       },
  //       {
  //         path: "ideia/:id",
  //         name: 'IdeiaDetailView',
  //         component: () =>
  //           import(/* webpackChunkName: "IdeiaDetailView" */ "@/views/IdeiaDetailView.vue"),
  //       },
  //       {
  //         path: "estatisticas-ideias",
  //         name: 'StatisticIdeiaView',
  //         component: () =>
  //           import(/* webpackChunkName: "StatisticIdeiaView" */ "@/views/StatisticIdeiaView.vue"),
  //       },
  //       {
  //         path: "usuarios",
  //         name: 'CollaboratorListView',
  //         component: () =>
  //           import(/* webpackChunkName: "CollaboratorListView" */ "@/views/CollaboratorListView.vue"),
  //       },
  //       {
  //         path: "usuario/:id",
  //         name: 'CollaboratorDetailView',
  //         component: () =>
  //           import(/* webpackChunkName: "CollaboratorDetailView" */ "@/views/CollaboratorDetailView.vue"),
  //       },
  //       {
  //         path: "estatisticas-usuarios",
  //         name: 'StatisticDiagnosticView',
  //         component: () =>
  //           import(/* webpackChunkName: "StatisticDiagnosticView" */ "@/views/StatisticDiagnosticView.vue"),
  //       },
  //     ]
  // },
  // {
  //   path: "/login",
  //   name: "LoginView",
  //   component: () =>
  //     import(/* webpackChunkName: "LoginView" */ "../views/LoginView.vue"),
  // },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
