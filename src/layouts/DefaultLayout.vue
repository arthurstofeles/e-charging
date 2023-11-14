<template>
  <div class="default">
    <v-navigation-drawer
      class="pa-5 sidebar"
      dark
      width="400"
      height="100%"
      permanent
    >
      <img src="@/assets/logo_echarging.svg" alt="" width="200" />

      <v-list>
        <v-list-item color="dark" :to="{ name: 'FaturasView' }" exact>
          <v-list-item-content>
            <v-list-item-title>Faturas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="dark" :to="{ name: 'MediasView' }" exact>
          <v-list-item-content>
            <v-list-item-title>Médias de Consumo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-btn text @click="logout"> sair </v-btn>
    </v-navigation-drawer>
    <v-container fluid class="pa-0 view">
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
    background-color: #1e345d;
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
  .view {
    background: #e2ede6;
  }
}
</style>
