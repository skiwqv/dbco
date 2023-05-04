Copy code
<template>
  <div id="app" class="main">
    <navBar />
    <RouterView></RouterView>
    <footer-component />
  </div>
</template>

<script>
import navBar from "./components/app-components/nav-bar.vue";
import footerComponent from "./components/app-components/footer-component.vue";
export default {
  components: {
    navBar,
    footerComponent,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
.main {
  overflow-x: hidden;
  font-family: "Open Sans", sans-serif;
}
</style>