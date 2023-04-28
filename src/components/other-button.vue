<template>
  <div class="other">
    <button class="other__button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.other {
  display: flex;
  justify-content: flex-start;
  padding-left: 120px;
  padding-top: 30px;

  &__button {
    color: white;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    background-color: #078fd3;
    font-family: "Opel Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    transition: all 0.3soip;
    &:hover{
      background-color: #0077c2;
    }
  }
}
</style>