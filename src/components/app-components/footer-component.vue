<template>
  <div class="footer">
    <ul class="footer__links">
      <li v-for="link in links" :key="link.name">
        <router-link :to="link.to" class="footer__link">{{
          link.name
        }}</router-link>
      </li>
    </ul>
    <div class="footer__divider"></div>
    <div class="footer__text">2002-2019 DBCO. Все права защищены</div>
  </div>
</template>

<script setup>
import { useLinks } from "@/composables/useLinks";

const { links } = useLinks();
</script>

<style lang="scss" scoped>
.footer {
  background-color: #078fd3;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__links {
    list-style-type: none;
    display: flex;
    padding-bottom: 20px;
  }
  &__link {
    text-decoration: none;
    padding-right: 20px;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
  &__divider {
    background-color: #ffffff;
    width: 500px;
    height: 1px;
  }
  &__text {
    color: white;
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
}
</style>