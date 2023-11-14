<template>
  <div class="quem-somos">
    <div>
      <v-row no-gutters>
        <v-col cols="12"
          ><h2>Quem Somos</h2>
          <p>
            Com um foco comprometido em soluções sustentáveis, a empresa visa
            simplificar a recarga de veículos elétricos, promovendo a adoção
            massiva de meios de transporte limpos e eficientes. Sua expertise em
            campos magnéticos e sistemas de carregamento sem fio redefinem a
            experiência de condução elétrica.
          </p>
          <div class="time">
            <div class="perfil">
              <img
                src="https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ALEXANDRE-PELINSON.png"
              />
              <div class="about">
                <h3>Elena Silva</h3>
                <p>
                  Visionária e empreendedora apaixonada por inovações
                  sustentáveis, fundou a empresa com o objetivo de transformar a
                  paisagem da mobilidade elétrica. Com uma formação sólida em
                  engenharia elétrica e uma visão centrada no futuro, Elena
                  lidera a equipe rumo a soluções revolucionárias. Sua dedicação
                  à sustentabilidade e ao avanço tecnológico impulsiona a
                  empresa a criar sistemas de carregamento por indução que não
                  apenas atendem às necessidades atuais, mas também moldam o
                  caminho para um amanhã mais limpo e eficiente.
                </p>
              </div>
            </div>
            <div class="perfil">
              <img
                src="https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ALEXANDRE-PELINSON.png"
              />
              <div class="about">
                <h3>Elena Silva</h3>
                <p>
                  Visionária e empreendedora apaixonada por inovações
                  sustentáveis, fundou a empresa com o objetivo de transformar a
                  paisagem da mobilidade elétrica. Com uma formação sólida em
                  engenharia elétrica e uma visão centrada no futuro, Elena
                  lidera a equipe rumo a soluções revolucionárias. Sua dedicação
                  à sustentabilidade e ao avanço tecnológico impulsiona a
                  empresa a criar sistemas de carregamento por indução que não
                  apenas atendem às necessidades atuais, mas também moldam o
                  caminho para um amanhã mais limpo e eficiente.
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuemSomosHome",
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
.quem-somos {
  background: #fff;
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
    color: #1e345d;
    font-size: 64px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
  p {
    color: #1e345d;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.4;
    margin-bottom: 32px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  .time {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .perfil {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 32px;
          @media screen and (max-width: 768px) {
      flex-direction: column;
    }
      img {
        max-height: 150px;
        max-width: 150px;
        border-radius: 50%;
        object-fit: cover;
      }
      .about {
        padding: 16px;
        h3 {
          color: #1e345d;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 4px;
          @media screen and (max-width: 768px) {
            font-size: 16px;
          }
        }
        p {
          color: #1e345d;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.4;
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>
