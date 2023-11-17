<template>
  <div class="login">
    <div class="pa-4 form">
      <a href="/"><img src="@/assets/logo_echarging_branco.svg" alt="logo" /></a>
      <v-form ref="form" v-model="valid" lazy-validation class="pa-4">
        <v-text-field
          class="pb-6"
          v-model="form.username"
          :rules="rules.emailRules"
          label="E-mail"
          required
          placeholder="Insira seu em-mail"
          :error-messages="error ? messageError : formError.email"
          :validate-on-blur="true"
          @blur="formError.email = null"
          :error="error"
          dark
          color="#27A952"
        ></v-text-field>
        <v-text-field
          class="pb-6"
          v-model="form.password"
          required
          dark
          placeholder="Digite sua senha"
          label="Senha"
          :rules="rules.passwordRules"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          :error-messages="error ? messageError : formError.password"
          :validate-on-blur="true"
          @blur="formError.password = null"
          :error="error"
          color="#27A952"
        ></v-text-field>
        <v-btn
          :disabled="loading"
          :loading="loading"
          color="#27A952"
          class="mr-4"
          rounded
          dark
          block
          @click="logar"
        >
          Entrar
        </v-btn>
      </v-form>
    </div>
    <div class="bg"></div>
    <AlertError :alertError="alertError" :messageError="messageError" />
  </div>
</template>

<script>
import { login } from "@/utils/services.js";
import AlertError from "../components/custom/AlertError.vue";
import { rules } from "@/utils/rules";
export default {
  components: { AlertError },
  name: "LoginView",
  data: () => ({
    valid: true,
    error: false,
    form: {
      username: "teste@teste.com",
      password: "senha1234",
    },
    showPassword: false,
    loading: false,
    alertError: false,
    messageError: "Ocorreu um erro inesperado.",
    formError: {},
  }),
  beforeCreate() {
    if (this.$store.state.loggedIn === "logado") {
      this.$router.push({ path: "/admin" });
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async logar() {
      this.loading = true;
      this.error = false;
      try {
        await login(this.form).then((resp) => {
          this.loading = false;
          this.$router.push({ path: "/admin" });
          window.localStorage.token = `token ${resp.token}`;
          this.$store.dispatch("setLoggedIn", "logado");
        });
      } catch (err) {
        this.alertError = true;
        this.loading = false;
        console.error(err);
      }
    },
  },
  computed: {
    formValid() {
      return this.$refs.form.validate();
    },
  },
  created() {
    this.rules = rules;
  },
};
</script>
<style lang="scss" scoped>
.login {
  display: grid;
  grid-template-columns: 500px auto;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .form {
    height: 100vh;
    background-color: #1e345d;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    width: 100%;
    form {
      width: 100%;
    }
  }
  .bg {
    background-image: url("@/assets/ilustracao-login.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>
