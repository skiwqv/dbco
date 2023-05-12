<template>
  <button :class="buttonClass" @click="handleButtonClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  onClick: Function,
  size: {
    type: String,
    default: "medium",
  },
});

const buttonClass = computed(() => {
  return {
    "button-small": props.size === "small",
    "button-medium": props.size === "medium",
    "button-large": props.size === "large",
  };
});

const handleButtonClick = () => {
  props.onClick();
};
</script>

<style lang="scss" scoped>
.button-large {
  background-color: #078fd3;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
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
  transition: all 0.3s;
  &:hover {
    background-color: #0077c2;
  }
  @media (max-width: 768px) {
    width: 200px;
    font-size: 20px;
  }
}
.button-small {
  margin-left: 120px;
  margin-top: 30px;
  color: white;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  background-color: #078fd3;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  transition: all 0.3soip;
  &:hover {
    background-color: #0077c2;
  }
}
.button-medium {
  width: 120px;
  height: 50px;
  color: white;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  margin-top: 40px;
  background-color: #078fd3;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  transition: all 0.3s;
  &_disabled {
    cursor: default;
    background-color: gray;
    color: rgb(215, 207, 207);
  }
  &:hover {
    background-color: #0077c2;
  }
}
</style>