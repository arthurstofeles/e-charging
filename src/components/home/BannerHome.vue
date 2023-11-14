<template>
  <div class="wrapper">
    <div class="banner">
      <div class="call-to-action">
        <h1>Energia & Liberdade</h1>
        <h3>
          Descubra a revolução da mobilidade elétrica com nossa tecnologia de
          carregamento por indução sem fios
        </h3>
        <v-btn x-large rounded class="mt-6 px-10" dark color="#27A952"
          >Entrar em contato</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerHome",
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-image: url("@/assets/ilustracao.png");
  background-position: right top;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 1200px) {
    background: #fff;
    background-image: url("");
  }
  .banner {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 60px 0px;
    height: 768px;
    @media screen and (max-width: 768px) {
      height: 480px;
    }
    .call-to-action {
      padding: 32px;
      max-width: 50%;
      @media screen and (max-width: 768px) {
        max-width: 100%;
      }
      h1 {
        background: linear-gradient(108deg, #27a952 -15.64%, #2f539a 69.14%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 64px;
        font-weight: 600;
        line-height: 1.1;
        margin-bottom: 16px;
        @media screen and (max-width: 768px) {
          font-size: 32px;
        }
      }
      h3 {
        color: #2f539a;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.4;
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
