<template>
  <div class="como-funciona">
    <div>
      <v-row no-gutters>
        <v-col cols="12"
          ><h2>Como Funciona</h2>
          <p>
            Descubra mais sobre a inovadora tecnologia de carregamento por
            indução para veículos elétricos. Saiba como nosso sistema gera um
            campo magnético para carregar seu veículo de forma eficiente e sem
            fios. Explore a seção de carregamento por indução para obter
            insights detalhados sobre o funcionamento e benefícios dessa
            tecnologia revolucionária.
          </p>
          <div class="funcionamento">
            <div>
              <div class="number">1</div>
              <h3>Geração de Campo Magnético Oscilante:</h3>
              <p>
                Um sistema de carregamento por indução utiliza uma fonte de
                energia para gerar um campo magnético oscilante em uma bobina de
                transmissão instalada no solo.
              </p>
            </div>
            <div>
              <div class="number">2</div>
              <h3>Recepção do Campo Magnético pelo Veículo:</h3>
              <p>
                O veículo elétrico possui uma bobina receptora localizada na
                parte inferior. Quando posicionado sobre a bobina de
                transmissão, o campo magnético é capturado pela bobina
                receptora.
              </p>
            </div>
            <div>
              <div class="number">3</div>
              <h3>Indução de Corrente Elétrica:</h3>
              <p>
                A captura do campo magnético gera uma corrente elétrica na
                bobina receptora do veículo, através do princípio da indução
                eletromagnética de Faraday.
              </p>
            </div>
            <div>
              <div class="number">4</div>
              <h3>Conversão e Armazenamento de Energia:</h3>
              <p>
                A corrente elétrica induzida é convertida de corrente alternada
                para corrente contínua e utilizada para carregar a bateria do
                veículo elétrico, armazenando a energia para alimentar o motor
                elétrico durante a condução.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComoFuncionaHome",
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
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.como-funciona {
  background: #1e345d;
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
    color: #fff;
    font-size: 64px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
  p {
    color: #fff;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.4;
    margin-bottom: 32px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  .funcionamento {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .number {
      width: 64px;
      height: 64px;
      text-align: center;
      color: #1e345d;
      text-align: center;
      font-size: 36px;
      font-weight: 600;
      border-radius: 50%;
      background-color: #90d2e9;
      padding: 8px;
      margin-bottom: 16px;
    }
    h3 {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 16px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
    p {
      color: #90d2e9;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.4;
      margin-bottom: 16px;
    }
  }
}
</style>
