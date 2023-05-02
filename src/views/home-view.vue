<template>
  <div>
    <infoComponent />
    <circle-info />
    <apps-component>Новинки</apps-component>
    <apps-component>Популярное</apps-component>
    <other-button>Остальные решения</other-button>
    <review-component />
  </div>
</template>

<script>
import infoComponent from "../components/home-components/info-component.vue";
import circleInfo from "../components/home-components/circle-info.vue";
import appsComponent from "../components/resource-components/apps-component.vue";
import otherButton from "../components/home-components/other-button.vue";
import reviewComponent from "../components/home-components/review-component.vue";
export default {
  name: "Home-view",
  components: {
    infoComponent,
    circleInfo,
    appsComponent,
    otherButton,
    reviewComponent,
  },
};
</script>

<style>
</style>