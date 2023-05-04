<template>
  <div>
    <infoComponent />
    <circle-info />
    <apps-component>Новинки</apps-component>
    <apps-component>Популярное</apps-component>
    <link-button :size="'small'" @event="toResource">Остальные решения</link-button> 
    <review-component />
  </div>
</template>

<script>
import infoComponent from "../components/home-components/info-component.vue";
import circleInfo from "../components/home-components/circle-info.vue";
import appsComponent from "../components/resource-components/apps-component.vue";
import reviewComponent from "../components/home-components/review-component.vue";
import linkButton from "@/components/common/link-button.vue";
export default {
  name: "Home-view",
  methods:{
    toResource(){
      this.$router.push('/resource')
    }
  },
  components: {
    infoComponent,
    circleInfo,
    appsComponent,
    linkButton,
    reviewComponent,
  },
};
</script>

<style>
</style>