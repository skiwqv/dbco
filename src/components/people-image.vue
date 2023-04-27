<template>
  <div class="people">
    <div class="people__text__container">
      <h1 class="people__title">Клиенты dbco</h1>
      <ul>
        <li class="people__text">API Bank, Ruterra</li>
        <li class="people__text">Центр Независимых Технологий</li>
        <li class="people__text">АП «Позитив», ЮА «Парфенов и партнеры»</li>
        <li class="people__text">
          ИД «Игромедиа», ЗАО «Конверсия Жильё»,Клуб «Автоподиум»
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "people-image",
};
</script>

<style lang="scss" scoped>
.people {
  background-image: url(@/assets/img/people.png);
  background-size: contain;
  background-repeat: no-repeat;
  align-content: center;
  display: flex;
  color: white;

  &__text__container {
    width: 1000px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  &__title {
    height: 35px;
    width: 450px;
    font-size: 35px;
    padding-right: 100px;
  }
  &__text {
    font-size: 20px;
  }
}
</style>