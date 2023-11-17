<template>
  <div>
    <header class="pa-8 d-flex justify-space-between align-center">
      <h1>Histórico de Consumo</h1>
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
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </section>
    <AlertError :alertError="alertError" :messageError="messageError" />
  </div>
</template>

<script>
import AlertError from "../components/custom/AlertError.vue";
import { installations, faturas } from "@/utils/services.js";
import { Bar } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "MediasView",
  components: {
    Bar,
    AlertError,
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      alertError: false,
      messageError: "Ocorreu um erro inesperado.",
      loading: false,
      items: [],
      installation: null,
      faturas: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Consumo Mensal - Kwh",
            backgroundColor: "rgb(39, 169, 82)",
            data: [],
          },
        ],
      },
    };
  },
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
      this.chartData.labels = [];
      this.chartData.datasets[0].data = [];
      this.loading = true;
      try {
        await faturas(this.installation).then((resp) => {
          this.faturas = resp;
          this.faturas.forEach((item) => {
            this.chartData.labels.push(this.getMes(item.due_date));
            this.chartData.datasets[0].data.push(
              +item.measurement.value - item.measurement.last_consumed
            );
          });
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
</style>
