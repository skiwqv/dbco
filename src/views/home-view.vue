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
import infoComponent from "../components/info-component.vue";
import circleInfo from "../components/circle-info.vue";
import appsComponent from "../components/apps-component.vue";
import otherButton from "../components/other-button.vue";
import reviewComponent from "../components/review-component.vue";
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