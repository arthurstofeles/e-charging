export const rules = {
  emailRules: [
    (v) => !!v || "Esse campo é obrigatório",
    (v) => /.+@.+\..+/.test(v) || "Ensira um e-mail valido",
  ],
  passwordRules: [(value) => !!value || "Esse campo é obrigatório"],
  nameRules: [(v) => !!v || "Esse campo é obrigatório"],
};
