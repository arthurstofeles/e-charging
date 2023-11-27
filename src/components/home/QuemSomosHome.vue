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
                src="@/assets/roberto.jpeg"
                alt="ALEXANDRE-PELINSON.png"
              />
              <div class="about">
                <h3>Roberto Jr <a href="http://linkedin.com/in/roberto-junior-3aa190106" target="_blank" rel="noopener noreferrer"> <v-icon color="#0e76a8">mdi-linkedin </v-icon> </a></h3>
                <p>
                  Eng. Eletricista Mestre e Doutor Eng. de Produção, Pós
                  doutorado em Otimização Licenciado em Matemática e Física.
                </p>
              </div>
            </div>
            <div class="perfil">
              <img
                src="@/assets/beatriz.jpeg"
                alt="ALEXANDRE-PELINSON.png"
              />
              <div class="about">
                <h3>Beatriz Fajardo <a href="https://www.linkedin.com/in/beatriz-fajardo-5695b4183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"> <v-icon color="#0e76a8">mdi-linkedin </v-icon> </a></h3>
                <p>
                  Sou mestre em Engenharia Civil (COPPE/UFRJ), possuo MBA
                  Executivo em Administraçao: Negocios do Setor Eletrico (FGV),
                  Pos-graduaçao em Gestao e Projetos em BIM ( PUC)
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
        border: 3px solid #1e345d;
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
