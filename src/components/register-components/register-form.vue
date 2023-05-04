<template>
  <div>
    <form class="form">
      <div class="form__Container">
        <div class="form__inputContainer">
          <div class="form__text">Фамилия:</div>
          <input type="text" class="form__input" v-model="surname" />
          <div v-show="v$?.surname?.$error" class="form__error">
            Фамилия обязательна
          </div>
        </div>
        <div class="form__inputContainer">
          <div class="form__text">Имя:</div>
          <input type="text" class="form__input" v-model="name" />
          <div v-show="v$?.name?.$error" class="form__error">
            Имя обязательно
          </div>
        </div>
        <div class="form__inputContainer">
          <div class="form__text">Отчество:</div>
          <input type="text" class="form__input" v-model="patronymic" />
          <div v-show="v$?.patronymic?.$error" class="form__error">
            Отчество обязательно
          </div>
        </div>
        <div class="form__inputContainer">
          <div class="form__text">Дата рождения:</div>
          <input type="date" class="form__input" v-model="birthday" />
          <div v-show="v$?.birthday?.$error" class="form__error">
            Дата рождения обязательна
          </div>
        </div>
        <div class="form__inputContainer">
          <div class="form__text">Адрес:</div>
          <input type="text" class="form__input" v-model="adres" />
          <div v-show="v$?.adres?.$error" class="form__error">
            Адрес обязателен
          </div>
        </div>
        <div class="form__inputContainer">
          <div class="form__text">ИНН:</div>
          <input type="number" class="form__input" v-model="inn" />
          <div v-show="v$?.inn?.$error" class="form__error">ИНН обязателен</div>
        </div>
        <div class="form__inputContainer">
          <div class="form__text">Телефон:</div>
          <input type="number" class="form__input" v-model="number" />
          <div v-show="v$?.number?.$error" class="form__error">
            Телефон обязателен
          </div>
        </div>
      </div>
    </form>
    <div class="form__buttonContainer">
      <linkButton :size="'medium'" @event="submitForm">Отправить</linkButton>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import linkButton from "../common/link-button.vue";
import { required, minLength } from "@vuelidate/validators";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      v$: useVuelidate(),
      surname: "",
      name: "",
      patronymic: "",
      birthday: "",
      adres: "",
      inn: "",
      number: "",
    };
  },
  components: {
    linkButton,
  },
  validations() {
    return {
      surname: { required },
      name: { required },
      patronymic: { required },
      birthday: { required },
      adres: { required },
      inn: { required, minLength: minLength(12) },
      number: { required, minLength: minLength(10) },
    };
  },
  methods: {
    ...mapActions("auth", {
      submit: "SUBMIT_FORM",
    }),

    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let formData = {
          surname: this.surname,
          name: this.name,
          patronymic: this.patronymic,
          birthday: this.birthday,
          adres: this.adres,
          inn: this.inn,
          number: this.number,
        };
        this.submit(formData);
      } else {
        console.log("err");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  &__Container {
    display: flex;
    flex-direction: column;
    color: #c2c2c2;
  }
  &__error {
    color: red;
    font-weight: 700;
    font-size: 12px;
  }
  &__text {
    font-weight: 700;
    margin-top: 24px;
    height: 30px;
    max-width: 100%;
    padding-right: 100px;
  }
  &__inputContainer {
    display: flex;
    flex-direction: row;
    padding-left: 100px;
    justify-content: space-between;
  }
  &__input {
    border: 1px solid #e0e0e0;
    border-radius: 7px;
    padding-left: 6px;
    width: 400px;
    height: 30px;
    margin-top: 20px;
  }
  &__buttonContainer {
    display: flex;
    max-width: 75%;
    margin-right: 100px;
    margin-bottom: 100px;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>