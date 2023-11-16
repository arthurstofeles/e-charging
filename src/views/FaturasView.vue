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
        <v-expansion-panel class="mb-4" v-for="fatura in faturas" :key="fatura.id">
          <v-expansion-panel-header>
            <v-row class="align-center">
              <v-col cols="3">
                <strong>{{ getMes(fatura.due_date) }}</strong>
              </v-col>
              <v-col cols="3">
                <strong>{{ formataPreco(fatura.price) }}</strong>
              </v-col>
              <v-col cols="3">
                <small>Vencimento: {{ formataData(fatura.due_date) }}</small>
              </v-col>
              <v-col cols="3">
                <v-chip :color="status[fatura.status].color" text-color="white">
                  {{ status[fatura.status].label }}
                </v-chip>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-4">
            <v-row class="d-flex pa-8 justify-center align-center">
              <v-col cols="5">
                <p><strong>Consumo:</strong> 280.000 kwh</p>
                <p>
                  <strong>Data das Leitura:</strong> 20/02/2023
                </p>
                <p><strong>Dias:</strong> 30 dias</p>
                <p><strong>Valor do Kwh:</strong> R$ 7,50</p>
                <h3>
                  <strong>Valor Total:</strong> {{ formataPreco(fatura.price) }}
                </h3></v-col
              >
              <v-col cols="7" class="text-center">
                <p>Pague via Pix! Utilize o QR Code:</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"
                  height="300px"
                />
                <v-btn v-if="fatura.file" class="mt-4" rounded dark color="#27A952" outlined :href="fatura.file" target="_blank"
                  >Ou faça o download do boleto</v-btn
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
  },
};
</script>

<style lang="scss" scoped></style>
