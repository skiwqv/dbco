<template>
  <div id="app" class="main">
    <navBar />
    <infoComponent />
    <circle-info />
  </div>
</template>

<script>
import navBar from "./components/nav-bar.vue";
import infoComponent from "./components/info-component.vue";
import circleInfo from "./components/circle-info.vue";
export default {
  components: {
    navBar,
    infoComponent,
    circleInfo
  },
};
</script>

<style>
.main{
  overflow-x: hidden;
}
</style>
