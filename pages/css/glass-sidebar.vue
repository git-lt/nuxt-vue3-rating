<script lang="ts" setup>
const activeIndex = ref(0)
const menus = ['Dashboard', 'Accounts', 'Orders', 'Charts', 'Support']
function onClickMenu(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <div class="wrapper w-full h-full bg-cover flex justify-center items-center">
    <nav class="group/nav w-[100px] min-h-min p-4 rounded-xl backdrop-blur-lg bg-indigo-100/70 border-2 border-indigo-100/70 shadow-xl transition-all duration-500 ease-[cubic-bezier(.8, .5, .5, .8)] hover:w-80">
      <div class="w-full flex items-center">
        <img src="~/assets/images/profile3.png" alt="" class="w-16 h-16 rounded-full border-4 border-indigo-100/80">
        <p class="text-gray-500 font-medium ml-3 leading-6  opacity-0 translate-x-5  group-hover/nav:animate-fadeInRight" style="animation-delay: .3s;">
          Good day,
          <span class=" block text-2xl text-gray-800">Hossein</span>
        </p>
      </div>
      <div class=" my-8 rounded-[30%] h-[2px] bg-slate-400 " />
      <ul class=" w-full">
        <CssMenuItem v-for="(item, index) in menus" :key="index" :name="item" :index="index" :active="activeIndex === index" @click="() => onClickMenu(index)" />
        <div class=" my-8 rounded-[30%] h-[2px] bg-slate-400 " />
        <CssMenuItem
          name="Logout" :index="5" :active="activeIndex === 5" @click="() => onClickMenu(5)"
        />
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  font-family: 'Roboto', sans-serif;
  background-image: url('~/assets/images/1152266.jpg');
}
</style>
