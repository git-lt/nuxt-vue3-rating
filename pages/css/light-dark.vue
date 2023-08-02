<script lang="ts" setup>
const dark = ref(true)

function toggleDark() {
  dark.value = !dark.value
}
</script>

<template>
  <div>
    <div
      class="w-40 h-40 relative z-10 flex items-center justify-center transition-colors ease-in-out duration-1000 rounded-full overflow-hidden"
      :class="{ 'bg-white': !dark, 'bg-slate-800': dark }"
      @click="toggleDark"
    >
      <div class="relative w-20 h-20">
        <div class="w-full h-full absolute rounded-full bg-orange-400  opacity-100 transition-all ease-in-out duration-1000 shadow-md shadow-orange-300" :class="{ 'translate-y-[-100%]': dark, '!opacity-0': dark }" />
        <div class="w-full h-full absolute moon rounded-full opacity-100 transition-all ease-in-out duration-1000" :class="{ 'translate-y-[100%]': !dark, '!opacity-0': !dark }" />
      </div>
      <div class="absolute bottom-0 left-0 w-full h-[35%] backdrop-blur-[16px]" />
    </div>
  </div>
</template>

<style scoped>
.moon {
  box-shadow: inset -14px -24px 0 #96daff, inset  -14px -24px 5px #a6e0ff;
}
</style>
