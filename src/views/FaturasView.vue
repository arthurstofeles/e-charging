<template>
  <div>
    <header class="pa-8 d-flex justify-space-between align-center">
      <h1>Faturas</h1>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-select
        v-if="installation"
        :items="items"
        outlined
        dense
        hide-details
        label="Instalação"
        item-text="name"
        item-value="id"
        v-model="installation"
        @input="getFaturas"
      ></v-select>
    </header>
    <div v-if="loading" class="d-flex pa-8 justify-center align-center">
      <v-progress-circular
        indeterminate
        :size="50"
        color="grey darken-3"
      ></v-progress-circular>
    </div>
    <section v-else class="pa-8">
      <v-expansion-panels class="mb-4">
        <v-expansion-panel
          class="mb-4"
          v-for="fatura in faturas"
          :key="fatura.id"
        >
          <v-expansion-panel-header>
            <v-row class="align-center">
              <v-col cols="2">
                <strong>{{ getMes(fatura.due_date) }}</strong>
              </v-col>
              <v-col cols="2">
                <strong class="preco">{{ formataPreco(fatura.price) }}</strong>
              </v-col>
              <v-col cols="3">
                <small class="vencimento"
                  >Vencimento: {{ formataData(fatura.due_date) }}</small
                >
              </v-col>
              <v-col cols="5">
                <v-chip
                  x-small
                  block
                  :color="status[fatura.status].color"
                  text-color="white"
                >
                  {{ status[fatura.status].label }}
                </v-chip>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-4">
            <v-row class="d-flex justify-center align-center content">
              <v-col cols="5" class="resume">
                <p>
                  <strong>Consumo:</strong>
                  {{
                    +fatura.measurement.value - fatura.measurement.last_consumed
                  }}
                  kw
                </p>
                <p>
                  <strong>Leitura atual:</strong>
                  {{ formataNumero(fatura.measurement.value) }} kw
                </p>
                <p>
                  <strong>Data da Leitura:</strong>
                  {{ formataData(fatura.created_at) }}
                </p>
                <p>
                  <strong>Valor do Kwh:</strong>
                  {{ formataPreco(fatura.price_kw) }}
                </p>
                <p>
                  <strong>Vencimento:</strong>
                  {{ formataData(fatura.due_date) }}
                </p>
                <h3>
                  <strong>Valor Total:</strong> {{ formataPreco(fatura.price) }}
                </h3></v-col
              >
              <v-col cols="7" class="text-center resume">
                <p v-if="fatura.qr_code">Pague via Pix! Utilize o QR Code:</p>
                <img
                  v-if="fatura.qr_code"
                  :src="fatura.qr_code"
                  height="300px"
                />
                <v-btn
                  v-if="fatura.file"
                  class="mt-4 mx-auto"
                  rounded
                  dark
                  color="#27A952"
                  outlined
                  :href="fatura.file"
                  target="_blank"
                  x-small
                  >faça o download do boleto</v-btn
                >
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </section>
    <AlertError :alertError="alertError" :messageError="messageError" />
  </div>
</template>

<script>
import AlertError from "../components/custom/AlertError.vue";
import { installations, faturas } from "@/utils/services.js";
export default {
  name: "StatisticDiagnosticView",
  components: { AlertError },
  data: () => ({
    alertError: false,
    messageError: "Ocorreu um erro inesperado.",
    loading: false,
    items: [],
    installation: null,
    faturas: [],
    status: {
      open: {
        color: "green",
        label: "Em aberto",
      },
      paid: {
        color: "blue",
        label: "Pago",
      },
      canceled: {
        color: "grey",
        label: "Cancelado",
      },
      overdue: {
        color: "red",
        label: "Vencido",
      },
    },
  }),
  beforeCreate() {
    if (this.$store.state.loggedIn === "deslogado") {
      this.$router.push({ path: "/login" });
    }
  },
  created() {
    this.getInstallations();
  },
  methods: {
    async getInstallations() {
      this.loading = true;
      try {
        await installations().then((resp) => {
          this.items = resp;
          this.installation = this.items[0].id;
          this.getFaturas();
          this.loading = false;
        });
      } catch (err) {
        this.alertError = true;
        this.loading = false;
        console.error(err);
      }
    },
    async getFaturas() {
      this.loading = true;
      try {
        await faturas(this.installation).then((resp) => {
          this.faturas = resp;
          this.loading = false;
        });
      } catch (err) {
        this.alertError = true;
        this.loading = false;
        console.error(err);
      }
    },
    getMes(data) {
      var dataAtual = new Date(data);
      dataAtual.setMonth(dataAtual.getMonth() - 1);
      var nomeMes = this.obterNomeMes(dataAtual.getMonth());
      return nomeMes;
    },
    obterNomeMes(numeroMes) {
      var nomesMes = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      return nomesMes[numeroMes];
    },
    formataPreco(valor) {
      const preco = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return preco.format(valor);
    },
    formataData(dataString) {
      var data = new Date(dataString);

      var dia = data.getDate();
      var mes = data.getMonth() + 1;
      var ano = data.getFullYear();

      var dataFormatada =
        (dia < 10 ? "0" : "") +
        dia +
        "/" +
        (mes < 10 ? "0" : "") +
        mes +
        "/" +
        ano;
      return dataFormatada;
    },
    formataNumero(num) {
      return parseFloat(num).toLocaleString("pt-BR", {
        minimumFractionDigits: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start !important;
  }
  h1 {
    font-size: 1.2rem;
    margin-bottom: 16px;
  }
}
.preco,
.vencimento {
  @media screen and (max-width: 1024px) {
    display: none;
  }
}
.content {
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-content: flex-start;
  }
}

.resume {
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    max-width: 100% !important;
  }
  img {
    max-width: 280px;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
}
</style>
