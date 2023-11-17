<template>
  <div :class="{ onScroll: !topOfPage }">
    <header class="header">
      <nav>
        <img src="@/assets/logo_echarging.svg" alt="Logo" />
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a
              :href="link.ancor"
              v-smooth-scroll="{
                duration: 1000,
                updateHistory: false,
                offset: -70,
              }"
              >{{ link.title }}</a
            >
          </li>
          <li>
            <v-btn
              rounded
              class="px-8 white--text"
              color="#1E345D"
              dark
              to="/login"
              >Área de Cliente</v-btn
            >
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderDesktop",
  props: {
    links: {
      type: Array,
      required: true,
    },
    topOfPage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.onScroll {
  background-color: #fff;
  box-shadow: 0 0 10px #aaa;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 24px;
  position: relative;
  z-index: 1;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1312px;
    width: 100%;
    margin: 0 auto;
    img {
      max-width: 200px;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      list-style: none;
      gap: 40px;
      li {
        color: #1E345D;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 16px;
        a {
          text-decoration: none;
          color: #1E345D;
          transition: 0.3s;
          &:hover {
            color: #2F539A;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
