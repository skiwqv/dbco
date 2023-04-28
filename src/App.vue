Copy code
<template>
  <div id="app" class="main">
    <navBar />
    <infoComponent />
    <circle-info />
    <apps-component>Новинки</apps-component>
    <apps-component>Популярное</apps-component>
    <other-button>Остальные решения</other-button>
  </div>
</template>

<script>
import navBar from "./components/nav-bar.vue";
import infoComponent from "./components/info-component.vue";
import circleInfo from "./components/circle-info.vue";
import appsComponent from "./components/apps-component.vue";
import otherButton from "./components/other-button.vue";
export default {
  components: {
    navBar,
    infoComponent,
    circleInfo,
    appsComponent,
    otherButton
  },
};
</script>

<style lang="scss">
.main {
  overflow-x: hidden;
}
</style>