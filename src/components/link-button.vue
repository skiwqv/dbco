<template>
  <button class="linkButton" @click="toRegister">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "link-button",
  methods:{
    toRegister(){
      this.$router.push('/register')
    }
  }
};
</script>

<style lang="scss" scoped>
.linkButton {
  background-color: #078fd3;
  color: white;
  font-family: "Opel Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  margin-top: 10px;
  width: 352px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  border: 0;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    background-color: #0077c2;
  }
}
</style>