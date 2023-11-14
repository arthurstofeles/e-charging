<template>
  <v-snackbar :value="alertError" :timeout="timeout" color="red" bottom>
    <v-icon small> mdi-alert-octagon </v-icon>
    <span> {{ messageError }}</span>
  </v-snackbar>
</template>
<script>
export default {
  name: "AlertError",
  props: {
    messageError: {
      type: String,
      default: "Ocorreu um erro inesperado",
    },
    alertError: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 4000,
    },
  },
};
</script>
