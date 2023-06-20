<script lang="ts" setup>
const emojis = ['🤔️', '👎', '🤐️', '😄', '😍', '🎉'];
const rateWrapperRef = ref<HTMLDivElement>();
const rate = ref<number>(0)

function onChange() {
  if(!rateWrapperRef.value) return;
  console.log(rate.value)

  rateWrapperRef.value.scrollTo({
    top: rate.value * rateWrapperRef.value.clientHeight,
    behavior: 'smooth'
  })
}
</script>

<template>
 <div id="app" class="w-80 grid grid-cols-[7rem_1fr] grid-rows-3">
  <div class="row-span-2 p-1 overflow-hidden h-20" ref="rateWrapperRef">
    <div 
      class="w-18 h-18 flex justify-center items-center snap-y mb-2 text-7xl"
      v-for="item in emojis" 
      :key="item"
     >
     {{ item }}
    </div>
  </div>
  <div class="text-center leading-8">Youre vote: ❓</div>
  <div>
    <div class="rating rating-lg flex-row-reverse" @change="onChange">
      <input 
        type="radio" 
        name="rating-2" 
        class="mask mask-star-2" 
        v-for="item in 5" 
        :key="item"
        :class="{active: 6-item === rate}"
        :value="6 - item"
        v-model="rate"
      />
    </div>
  </div>
  <div class="col-span-2 text-center pt self-center">Ranks</div>
 </div>
</template>

<style>
.mask-star-2 {
  mask-size: 87%;
  transition: all .2s;
}
.rating :where(input) {
  background-color: rgb(194, 194, 194);

  &.active {
    background-color: rgb(234, 98, 14);
    mask-size: 92.5%;

    ~ input {
      background-color: rgb(234, 98, 14);
      mask-size: 92.5%;
    }
  }
  &:hover {
    background-color: rgb(234, 183, 15);

    ~ input {
      background-color: rgb(234, 183, 15);
    }
  }
}
</style>