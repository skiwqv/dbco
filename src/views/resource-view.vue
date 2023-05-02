<template>
  <div class="resourse">
    <scoped-nav :links="appsLinks">
      <template #default="{ links }"
        ><a class="resourse__link" v-for="link in links" :key="link"
          >{{ link }}
        </a>
      </template>
    </scoped-nav>
    <apps-component class="resourse__apps"/>
    <apps-component class="resourse__apps" />
  </div>
</template>

<script>
import appsComponent from "../components/resource-components/apps-component.vue";
import scopedNav from "../components/register-components/scoped-nav.vue";
export default {
  name: "resourse-view",
  components: {
    appsComponent,
    scopedNav,
  },
  data() {
    return {
      appsLinks: [
        "Все",
        "Общее",
        "На заказ",
        "Компаниям",
        "Сотрудникам",
        "Для дома",
        "Прочее",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.resourse {
  &__link {
    padding-left: 20px;
    cursor: pointer;
    font-size: 19px;
    transition: all 0.3s;
    text-decoration: underline;
    &:hover {
      color: #078fd3;
    }
  }
  &__apps{
    margin-bottom: 100px;
  }
}
</style>