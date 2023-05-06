<template>
  <ul class="nav">
    <li class="nav__links">
      <slot :links="links" :class="nav__link" />
    </li>
  </ul>
</template>

<script setup>
import { reactive, defineProps } from "vue";
const props = defineProps({
  links: Array,
});
const state = reactive({
  links: props.links,
});
const links = state.links
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  &__links {
    color: #c2c2c2;
    list-style: none;
  }
  &__link {
    font-size: 18px;
    cursor: pointer;
  }
}
</style>