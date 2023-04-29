Copy code
<template>
  <div id="app" class="main">
    <navBar />
    <RouterView></RouterView>
    <footer-component />
  </div>
</template>

<script>
import navBar from "./components/nav-bar.vue";
import footerComponent from "./components/footer-component.vue";
export default {
  components: {
    navBar,
    footerComponent
  },
};
</script>

<style lang="scss">
.main {
  overflow-x: hidden;
}
</style>