<template>
  <div class="status">
    <span class="status__text"
      >Автообновление
      <img src="@/assets/img/form-image/switcher.png" alt="" />
    </span>
    <div class="status__nameContainer">
      <span class="status__name">Решение </span>
      <span class="status__name">Установка </span>
      <span class="status__name">Состояние</span>
      <span class="status__name">Оценка</span>
    </div>
    <div class="status__condition">
      <div class="status__type">
        <span>Индексы почтовых<br />отделений</span>
        <span>Прокат техники</span>
        <span>Учёт занятий</span>
      </div>
      <div class="status__date">
        <span>2019-11-09. 12:19</span>
        <span>2019-11-09. 12:19</span>
        <span>2019-11-09. 12:19</span>
      </div>
      <div class="status__progress">
        <img
          src="@/assets/img/form-image/progress.png"
          alt=""
          class="status__image"
        />
        <img
          src="@/assets/img/form-image/switcher.png"
          alt=""
          class="status__switcher"
        />
        <img
          src="@/assets/img/form-image/progress.png"
          alt=""
          class="status__image"
        />
      </div>
      <div class="status__starsContainer">
        <img
          src="@/assets/img/form-image/star.png"
          alt=""
          class="status__star"
        />
        <img
          src="@/assets/img/form-image/star.png"
          alt=""
          class="status__star"
        />
        <img
          src="@/assets/img/form-image/star.png"
          alt=""
          class="status__star"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.status {
  background-color: white;
  padding-top: 40px;
  &__text {
    display: flex;
    align-items: center;
    font-weight: 700;
    padding-left: 100px;
  }
  &__nameContainer {
    padding-top: 20px;
    display: flex;
    justify-content: space-around;

    border-bottom: 7px solid #078fd3;
    font-weight: 700;
  }
  &__condition {
    display: flex;
    margin-bottom: 100px;

    justify-content: space-around;
    padding-top: 30px;
  }
  &__type {
    display: flex;
    padding-top: 5px;
    justify-content: space-between;
    flex-direction: column;
    color: #078fd3;
    font-weight: 700;
  }
  &__version {
    height: 30px;
    width: 60px;
    display: flex;
    justify-self: center;
    color: white;
    background-color: #078fd3;
    font-weight: 700;
    border-radius: 33.5px;
    align-items: center;
    justify-content: center;
  }
  &__date {
    font-weight: 700;
    display: flex;
    color: #078fd3;
    flex-direction: column;
    justify-content: space-between;
  }
  &__progress {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  &__switcher {
    height: 20px;
  }
  &__image {
    height: 20px;
  }
  &__starsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__star {
    height: 40px;
    width: 80px;
  }
}
</style>
