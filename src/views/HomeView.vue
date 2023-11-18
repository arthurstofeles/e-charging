<template>
  <div class="home">
    <HeaderLayout />
    <BannerHome id="inicio" />
    <ComoFuncionaHome id="como-funciona" />
    <ContatoHome
      id="contato"
      @contato="contato"
      :loading="loadingBtn"
      :sucess="sucess"
    />
    <QuemSomosHome id="quem-somos" />
    <FooterHome />
    <AlertSuccess
      :dialog="sucess"
      :dialogMessage="message"
      dialogTextButton="OK"
      @close="sucess = false"
    />
    <AlertError :alertError="error" :messageError="message" />
  </div>
</template>

<script>
import BannerHome from "../components/home/BannerHome.vue";
import FooterHome from "../components/home/FooterHome.vue";
import QuemSomosHome from "../components/home/QuemSomosHome.vue";
import ComoFuncionaHome from "../components/home/ComoFuncionaHome.vue";
import ContatoHome from "../components/home/ContatoHome.vue";
import HeaderLayout from "../layouts/HeaderLayout";
import AlertSuccess from "@/components/custom/AlertSuccess";
import AlertError from "@/components/custom/AlertError";
import { lead } from "../utils/services";
export default {
  name: "HomeView",
  components: {
    HeaderLayout,
    ContatoHome,
    ComoFuncionaHome,
    QuemSomosHome,
    FooterHome,
    BannerHome,
    AlertSuccess,
    AlertError,
  },
  data: () => ({
    sucess: false,
    error: false,
    message: "",
    loadingBtn: false,
  }),
  methods: {
    async contato(e) {
      this.error = false;
      this.loadingBtn = true;
      try {
        await lead(e).then(() => {
          this.loadingBtn = false;
          this.message = "Solicitação de contato enviada!";
          this.sucess = true;
        });
      } catch (e) {
        this.loadingBtn = false;
        this.message = "Ocorreu um erro inesperado";
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
  padding-bottom: 32px;
}
</style>
