<template>
  <div>
    <header class="pa-8 d-flex justify-space-between align-center">
      <h1>Faturas</h1>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-select
        :items="items"
        outlined
        dense
        hide-details
        label="Instalação"
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
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row class="align-center">
              <v-col cols="3">
                <strong>Janeiro</strong>
              </v-col>
              <v-col cols="3">
                <strong>R$ 5.000,00</strong>
              </v-col>
              <v-col cols="3">
                <small>Vencimento: 22/02/2023</small>
              </v-col>
              <v-col cols="3">
                <v-chip color="red" text-color="white"> Em Atraso </v-chip>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-4">
            <v-row class="d-flex pa-8 justify-center align-center">
              <v-col cols="5">
                <p><strong>Leitura Anterior:</strong> 202.000 kwh</p>
                <p><strong>Leitura Atual:</strong> 280.000 kwh</p>
                <p><strong>Consumo:</strong> 280.000 kwh</p>
                <p>
                  <strong>Datas das Leituras:</strong> 20/01/2023 - 20/02/2023
                </p>
                <p><strong>Dias:</strong> 30 dias</p>
                <p><strong>Valor do Kwh:</strong> R$ 7,50</p>
                <h3><strong>Valor Total:</strong> R$ 5.000,00</h3></v-col
              >
              <v-col cols="7" class="text-center">
                <p>Pague via Pix! Utilize o QR Code:</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"
                  height="300px"
                />
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
import { statisticDiagnostic } from "@/utils/services.js";
export default {
  name: "StatisticDiagnosticView",
  components: { AlertError },
  data: () => ({
    diagnostics: {},
    diagnosticsFormatados: [],
    alertError: false,
    messageError: "Ocorreu um erro inesperado.",
    loading: false,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  // beforeCreate() {
  //   if (this.$store.state.loggedIn === "deslogado") {
  //     this.$router.push({ path: "/login" });
  //   }
  // },
  created() {
    this.getDiagnostic();
  },
  methods: {
    async getDiagnostic() {
      this.loading = true;
      try {
        await statisticDiagnostic().then((resp) => {
          this.diagnostics = resp;
          this.setPerguntaSelect();
          this.loading = false;
        });
      } catch (err) {
        this.alertError = true;
        this.loading = false;
        console.error(err);
      }
    },
    setDataChart(data) {
      return {
        labels: data.map((item) => item.opcao),
        datasets: [
          {
            backgroundColor: data.map(
              () => "#" + Math.floor(Math.random() * 16777215).toString(16)
            ),
            data: data.map((item) => item.count),
          },
        ],
      };
    },
    setPerguntaSelect() {
      const novoArray = [];

      for (const pergunta in this.diagnostics.perguntas_select) {
        const opcoes = this.diagnostics.perguntas_select[pergunta];
        const labels = opcoes.map((opcao) => opcao.opcao);
        const backgroundColor = opcoes.map(
          () => "#" + Math.floor(Math.random() * 16777215).toString(16)
        );
        const data = opcoes.map((opcao) => opcao.count);

        novoArray.push({
          pergunta,
          labels,
          datasets: [
            {
              backgroundColor,
              data,
            },
          ],
        });
      }
      this.diagnosticsFormatados = novoArray;
    },
  },
};
</script>

<style lang="scss" scoped></style>
