<template>
  <div class="bg-white w-full h-full flex justify-center items-center">
    <div class="w-96">
      <span class="text">这里是一个很有意思的下划线过渡效果CSS演示</span>
    </div>
  </div>
</template>

<style scoped>
.text {
  cursor: pointer;
  line-height: 2;
  font-size: 32px;
  background: linear-gradient(to right, #82b7a3, #67a7d1) no-repeat right bottom;
  background-size: 0 2px;
  transition: background-size .6s;
  &:hover {
    background-position-x: left;
    background-size: 100% 2px;
  }
}
</style>
