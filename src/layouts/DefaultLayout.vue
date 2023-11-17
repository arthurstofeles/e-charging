<template>
  <div class="default">
    <v-navigation-drawer
      class="pa-5 sidebar"
      dark
      width="400"
      height="100%"
      permanent
    >
      <img src="@/assets/logo_echarging_branco.svg" alt="" width="200" />

      <v-list>
        <v-list-item color="dark" :to="{ name: 'FaturasView' }" exact>
          <v-list-item-content>
            <v-list-item-title>Faturas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="dark" :to="{ name: 'MediasView' }" exact>
          <v-list-item-content>
            <v-list-item-title>Histórico de Consumo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-btn text @click="logout"> sair </v-btn>
    </v-navigation-drawer>

    <header class="header">
      <img src="@/assets/logo_echarging_branco.svg" alt="Logo" />
      <v-icon
        @click.stop="
          drawer = !drawer;
          $emit('open');
        "
        color="white"
        >mdi-menu</v-icon
      >
    </header>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      class="pa-2"
      width="900"
    >
      <nav class="nav">
        <img src="@/assets/logo_echarging.svg" alt="Logo" />
        <ul>
          <li><v-btn text :to="{ name: 'FaturasView' }" exact> Faturas </v-btn></li>
          <li><v-btn text :to="{ name: 'MediasView' }" exact> Histórico de Consumo </v-btn></li>
          <li><v-btn text @click="logout"> sair </v-btn></li>
        </ul>
        <v-icon
          @click="
            drawer = !drawer;
            $emit('open');
          "
          large
          color="black"
        >
          mdi-close
        </v-icon>
      </nav>
    </v-navigation-drawer>

    <v-container fluid class="pa-0 view">
      <router-view />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data: () => ({ drawer: false }),
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
  background: #e2ede6;
  height: 100%;
  display: flex;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  .sidebar {
    @media screen and (max-width: 1024px) {
      display: none;
    }
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
.header {
  background-color: #1e345d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 1024px) {
    display: none;
  }
  img {
    max-width: 150px;
  }
}
.nav {
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    max-width: 150px;
  }
  ul {
    list-style: none;
    padding: 16px;
    text-align: center;
    li {
      color: #000;
      margin-bottom: 32px;
      font-size: 18px;
      font-weight: 600;
      text-transform: uppercase;
      a {
        text-decoration: none;
        color: #000;
        transition: 0.3s;
        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
