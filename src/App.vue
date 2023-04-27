<template>
  <div id="app">
    <navBar />
    <infoComponent />
  </div>
</template>

<script>
import navBar from "./components/nav-bar.vue";
import infoComponent from "./components/info-component.vue";
export default {
  components: {
    navBar,
    infoComponent,
  },
};
</script>

<style>
#app{
  margin: 0;
  padding: 0;
}
</style>
