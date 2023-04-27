<template>
  <div>
    <div class="circleInfo">
      <div class="circleInfo__background">
        <img
          src="@/assets/img/block2.png"
          alt="circle info"
          class="circleInfo__image"
        />
        <div class="circleInfo__container">
          <div class="circleInfo__textContainer">
            <h1 class="circleInfo__title">
              Выбирайте готовое <br />
              решение, создавайте сами <br />
              или обратитесь к dbco
            </h1>
            <p class="circleInfo__text">
              В разделе «решения dbco» вам доступны уже готовые проекты из
              <br />
              самых разных направлений бизнеса. Конструктор dbco поможет<br />
              создать с нуля или доработать выбранное решение <br />
              для максимального соответствия именно вашим требованиям.
            </p>
            <p class="circleInfo__text">
              Вы можете сделать всё самостоятельно, используя бесплатные <br />
              справочные материалы, получить необходимую помощь или <br />
              заказать уникальную разработку целиком в dbco.
            </p>
            <div class="circleInfo__graphicContainer">
              <h1 class="circleInfo__title">
                Что дает конструктор <br />
                бизнес-решений?
              </h1>
              <img
                src="@/assets/img/graphic.png"
                alt="graphic"
                class="circleInfo__graphic"
              />
            </div>
          </div>
          <img
            src="@/assets/img/build.png"
            alt="build img"
            class="circleInfo__buildingImage"
          />
        </div>
        <people-image-vue />
      </div>
    </div>
  </div>
</template>

<script>
import peopleImageVue from "./people-image.vue";
export default {
  name: "circleInfo",
  components: {
    peopleImageVue,
  },
};
</script>

<style lang="scss" scoped>
.circleInfo {
  &__background {
    background-image: url(@/assets/img/blueBG.png);
    height: 100%;
    width: 100vw;
  }
  &__image {
    height: 1000px;
    width: 100%;
  }
  &__container {
    display: flex;
    justify-content: center;
  }
  &__textContainer {
    color: white;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
  }
  &__title {
    font-size: 35px;
    margin-bottom: 4px;
  }
  &__text {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  &__graphicContainer {
    display: flex;
    padding-top: 100px;
    flex-direction: column;
  }
  &__graphic {
    width: 600px;
    height: 400px;
    padding-top: 30px;
  }
  &__buildingImage {
    height: 1500px;
  }
  &__peopleContainer {
    display: flex;
  }
}
</style>