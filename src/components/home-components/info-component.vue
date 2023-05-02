<template>
  <div class="info">
    <div class="info__image-container">
        <img src="@/assets/img/info-image/Untitled.png" alt="image" class="info__image" />
    </div>
    <div class="info__container">
      <h1 class="info__title">Что такое dbco?</h1>
      <p class="info__text">
        dbco включает в себя платформу и прикладные решения, разработанные на её
        основе, для хранения знаний и учетных данных. Платформа не является
        программным продуктом для конечного пользователя, который обычно
        работает с одним или несколькими прикладными решениями. Такой подход
        позволяет автоматизировать различные виды деятельности, используя единую
        технологическую базу.
      </p>
        <link-button>Попробовать пямо сейчас</link-button>        
    </div>
  </div>
</template>

<script>
import linkButton from "./link-button.vue";
export default {
  name: "info-component",
  components: {
    linkButton,
  },
};
</script>

<style lang="scss" scoped>
$text-color: #078fd3;
.info {
  font-family: Opel Sans;
  display: flex;
  width: 100%;
  background-image: url(@/assets/img/info-image/декор.png);
  background-repeat: no-repeat;
  background-size: cover;  

  &__image-container {
    display: flex;
    align-items: center;
    padding-left: 5%;
    height: 60vw;
  }
  &__image {
    z-index: 0;
    width: 600px;
    height: 400px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    justify-content: center;
    width: 100vw;
    padding-left: 10%;
  }
  &__title {
    color: $text-color;
    font-weight: 700;
    font-style: normal;
    font-size: 40px;
    margin-bottom: 0;
  }
  &__text {
    margin-top: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
  }
  @media (max-width: 768px) {

    &__image{
      display: none;
    }
    &__title{
      font-size: 30px;
    }
    &__text{
      font-size: 17px;
    }
  }
}
</style>