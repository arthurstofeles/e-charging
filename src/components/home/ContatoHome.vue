<template>
  <div class="contato">
    <div>
      <v-row no-gutters>
        <v-col cols="12"
          ><h2>Contato</h2>
          <p>
            Se quiser saber mais sobre a nossa proposta, deixe seu e-mail ou
            telefone que entraremos em contato. Caso prefira, também pode nos
            contatar diretamente
          </p>
          <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
            <v-text-field
              v-model="formData.name"
              label="Nome"
              required
              :rules="genericRules"
              color="#90D2E9"
              placeholder="Insira seu nome aqui"
              dark
            ></v-text-field>
            <v-text-field
              v-model="formData.email"
              label="E-mail"
              required
              :rules="emailRules"
              color="#90D2E9"
              placeholder="Insira seu e-mail"
              dark
            ></v-text-field>
            <v-text-field
              v-model="formData.phone"
              label="Telefone"
              required
              :rules="genericRules"
              color="#90D2E9"
              placeholder="(xx) xxxxx-xxxx"
              v-mask="'(##) #####-####'"
              dark
            ></v-text-field>
          </v-form>
        </v-col>
        <v-btn
          rounded
          class="enviar black--text mt-6 px-10"
          color="#90D2E9"
          @click="send"
          :loading="loading"
          >Solicitar</v-btn
        >
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContatoHome",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    sucess: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    formData: {
      name: "",
      email: "",
      phone: "",
    },
    valid: false,
    emailRules: [
      (v) => !!v || "Esse campo é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "Ensira um e-mail valido",
    ],
    genericRules: [(v) => !!v || "Esse campo é obrigatório"],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    send() {
      if (this.formValid) {
        this.$emit("contato", this.formData);
      }
    },
    reset() {
      this.formData.phone = "";
      this.formData.email = "";
      this.formData.phone = "";
      this.$refs.form.reset();
    },
  },
  computed: {
    formValid() {
      return this.$refs.form.validate();
    },
  },
  watch: {
    sucess() {
      this.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.contato {
  background: #2f539a;
  padding-top: 64px;
  padding-bottom: 64px;
  .row {
    position: relative;
    padding-bottom: 16px;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
  h2 {
    color: #90d2e9;
    font-size: 64px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
  p {
    color: #90d2e9;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  .enviar {
    display: flex;
    margin: 0 auto;
  }
}
</style>
