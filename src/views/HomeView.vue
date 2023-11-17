<template>
  <div class="home">
    <HeaderLayout />
        <BannerHome id="inicio" />
    <ComoFuncionaHome id="como-funciona" />
    <ContatoHome id="contato" />
    <QuemSomosHome id="quem-somos" />
    <FooterHome />
  </div>
</template>

<script>
import BannerHome from "../components/home/BannerHome.vue";
import FooterHome from "../components/home/FooterHome.vue";
import QuemSomosHome from "../components/home/QuemSomosHome.vue";
import ComoFuncionaHome from "../components/home/ComoFuncionaHome.vue";
import ContatoHome from "../components/home/ContatoHome.vue";
import HeaderLayout from "../layouts/HeaderLayout";
export default {
  name: "HomeView",
  data: () => ({}),
  components: {
    HeaderLayout,
    ContatoHome,
    ComoFuncionaHome,
    QuemSomosHome,
    FooterHome,
    BannerHome
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
  padding-bottom: 32px;
}
</style>
