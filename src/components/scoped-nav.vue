<template>
  <ul class="nav">
    <li class="nav__links">
        <slot :links="links" :class="nav__link" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "scoped-nav",
  props: {
    links: { type: Array, required: true },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  &__links {
    color: #c2c2c2;
    list-style: none;
  }
  &__link{
    font-size: 18px;
    cursor: pointer;
  }

}
</style>