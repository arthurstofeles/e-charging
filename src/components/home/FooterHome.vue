<template>
  <div class="footer">
    <div>
      Uma endotartup da
      <img width="300" src="@/assets/olimpiada.png" alt="" />
      <img width="300" src="@/assets/eletrobas.png" alt="" />
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterHome",
};
</script>

<style lang="scss" scoped>
.footer {
  max-width: 1312px;
  width: 100%;
  background: rgb(38, 40, 39);
  padding: 32px;
  margin: 0 auto;
  margin-top: 64px;
  color: #fff;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
}
</style>
