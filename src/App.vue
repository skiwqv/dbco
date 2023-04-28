Copy code
<template>
  <div id="app" class="main">
    <navBar />
    <infoComponent />
    <circle-info />
    <apps-component>Новинки</apps-component>
    <apps-component>Популярное</apps-component>
    <other-button>Остальные решения</other-button>
    <review-component />
    <footer-component />
  </div>
</template>

<script>
import navBar from "./components/nav-bar.vue";
import infoComponent from "./components/info-component.vue";
import circleInfo from "./components/circle-info.vue";
import appsComponent from "./components/apps-component.vue";
import otherButton from "./components/other-button.vue";
import reviewComponent from "./components/review-component.vue";
import footerComponent from "./components/footer-component.vue";
export default {
  components: {
    navBar,
    infoComponent,
    circleInfo,
    appsComponent,
    otherButton,
    reviewComponent,
    footerComponent
  },
};
</script>

<style lang="scss">
.main {
  overflow-x: hidden;
}
</style>