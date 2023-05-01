<template>
    <div class="apps">
      <h1 class="apps__title">
        <slot></slot>
      </h1>
      <div class="apps__container">
        <img src="@/assets/img/app1.png" alt="app new" class="apps__image" />
        <div class="apps__divider"></div>
        <img src="@/assets/img/app2.png" alt="app new" class="apps__image" />
        <div class="apps__divider"></div>
        <img src="@/assets/img/app3.png" alt="app new" class="apps__image" />
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "apps-component",
  };
  </script>
  <style lang="scss" scoped>
  .apps {
    background-color: white;
    &__title {
      font-weight: 700;
      font-style: normal;
      font-size: 40px;
      padding-left: 140px;
      margin-bottom: 5;
      color: #078dd3;
    }
    &__container {
      display: flex;
      justify-content: center;
    }
    &__divider {
      border: 2px solid #078fd3;
      height: 200px;
      margin-left: 100px;
      margin-right: 100px;
    }
    &__image {
      cursor: pointer;
      width: 300px;
      height: 200px;
    }
    @media (max-width: 768px) {
      &__container{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &__divider{
        display: none;
      }
      &__title{
        display: flex;
        padding: 0;
        justify-content: center;
      }
    }
  }
  </style>