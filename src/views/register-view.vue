<template>
  <div class="register">
    <scoped-nav :links="registerLinks">
      <template #default="{ links }"
        ><a class="register__link" v-for="link in links" :key="link"
          >{{ link }}
        </a>
      </template>
    </scoped-nav>
    <div class="register__radio">
      <label for="option1" class="register__radioButton">
        <input type="radio" v-model="selected" value="option1" />
        Физическое лицо
      </label>
      <label for="option2" class="register__radioButton">
        <input type="radio" v-model="selected" value="option2" />
        Юридическое лицо
      </label>
    </div>
    <register-form />
    <register-status-vue class="register__status" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import scopedNav from "@/components/register-components/scopedNav.vue";
import registerForm from "@/components/register-components/register-form.vue"
import registerStatusVue from '@/components/register-components/register-status.vue';

const registerLinks = ref([
  "Персональная информация",
  "Мои решения",
  "Финансы",
  "Поддержка",
  "База данных",
])
  const selected = ref("option1") 
</script>

<style lang="scss" scoped>
.register {
  margin: 0;
  padding: 0;
  &__link {
    padding-left: 20px;
    cursor: pointer;
    font-size: 19px;
    transition: all 0.3s;
    text-decoration: underline;
    &:hover {
      color: #078fd3;
    }
  }
  &__radio {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
  &__radioButton {
    padding-left: 40px;
    font-weight: 700;
  }
}
</style>>
