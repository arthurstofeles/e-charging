<template>
  <div class="default">
    <v-navigation-drawer
      class="grey darken-3 pa-5 sidebar"
      dark
      width="400"
      height="100%"
      permanent
    >
      <img src="@/assets/logo-branca.png" alt="" />

      <v-list>
        <v-list-item color="dark" :to="{ name: 'IdeiaListView' }" exact>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Ideias Sustentáveis</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'CollaboratorListView' }" exact color="dark">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Autodiagnóstico de usuários</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item color="dark" :to="{ name: 'StatisticDiagnosticView' }" exact>
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Estatística de usuários</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item color="dark" :to="{ name: 'StatisticIdeiaView' }" exact>
          <v-list-item-icon>
            <v-icon>mdi-chart-areaspline-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Estatística de ideias</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-btn text @click="logout"> sair </v-btn>
    </v-navigation-drawer>
    <v-container fluid class="pa-0 blue-grey lighten-5">
      <router-view />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data: () => ({}),
  methods: {
    logout() {
      this.$store.dispatch("setLoggedIn", "deslogado");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style lang="scss" scoped>
.default {
  display: flex;
  .sidebar {
    position: sticky;
    height: 100vh !important;
    ::v-deep .v-navigation-drawer__content {
      display: flex !important;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      ::v-deep .v-list-item__title {
        text-transform: uppercase;
      }
    }
  }
}
</style>
