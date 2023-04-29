<template>
  <div class="form">
    <div class="form__textContainer">
      <div class="form__text">Фамилия:</div>
      <div class="form__text">Имя:</div>
      <div class="form__text">Отчество:</div>
      <div class="form__text">Дата рождения:</div>
      <div class="form__text">Адрес:</div>
      <div class="form__text">ИНН:</div>
      <div class="form__text">Телефон:</div>
    </div>
    <div class="form__inputContainer">
      <input type="text" class="form__input" />
      <input type="text" class="form__input" />
      <input type="text" class="form__input" />
      <input type="text" class="form__input" />
      <input type="text" class="form__input" />
      <input type="text" class="form__input" />
      <input type="text" class="form__input" />
    </div>
  </div>
</template>

<script>
export default {
  name: "register-form",
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  &__textContainer {
    display: flex;
    flex-direction: column;
    color: #c2c2c2;
    justify-content: space-between;
  }
  &__text {
    font-weight: 700;
    margin-top: 20px;
    height: 30px;
  }
  &__inputContainer {
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    justify-content: center;
  }
  &__input {
    border: 1px solid #e0e0e0;
    border-radius: 7px;
    width: 400px;
    height: 30px;
    margin-top: 20px;
  }
}
</style>>