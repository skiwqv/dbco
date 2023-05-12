<template>
  <div>
    <infoComponent />
    <circle-info />
    <apps-component>Новинки</apps-component>
    <apps-component>Популярное</apps-component>
    <link-button :onClick="toResource" :size="'small'" @event="toResource"
      >Остальные решения</link-button
    >
    <review-component />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import infoComponent from "../components/home-components/info-component.vue";
import circleInfo from "../components/home-components/circle-info.vue";
import appsComponent from "../components/resource-components/apps-component.vue";
import reviewComponent from "../components/home-components/review-component.vue";
import linkButton from "@/components/common/link-button.vue";

const router = useRouter();
const toResource = () => {
  router.push("/resource");
};
</script>

<style>
</style>