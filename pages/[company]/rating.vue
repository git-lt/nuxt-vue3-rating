<script lang="ts" setup>
import type { RateData } from '~/types'

const route = useRoute()
const companyName = route.params.company as string
console.log(companyName)

const LOCAL_KEY = 'rating'
const emojis = ['🤔️', '👎', '🤐️', '😄', '😍', '🎉']
const rateWrapperRef = ref<HTMLDivElement>()
const rate = ref<number>(0)
let voted: Record<string, number> = {}
const message = ref<string>('')

const { data: rateData, pending } = await useFetch('/api/rate', {
  query: {
    uid: companyName,
  },
  default() {
    return createNewRating()
  },
})

async function onChange(evemt: Event | boolean): Promise<void> {
  if (!rateWrapperRef.value)
    return

  rateWrapperRef.value.scrollTo({
    top: rate.value * rateWrapperRef.value.clientHeight,
    behavior: 'smooth',
  })
  // 如果是初始化，只进行滚动，不请求接口
  if (evemt === true)
    return

  // 1. 记录新的分数，在原来的分数上加1
  // 2. 如果之前投过票，则将原来的票减去
  // 3. 缓存一份在本地
  const key = `r${rate.value}` as keyof RateData
  const oldRate = voted[companyName] || 0
  rateData.value && (rateData.value[key] += 1)

  if (oldRate) {
    const key = `r${oldRate}` as keyof RateData
    rateData.value && (rateData.value[key] -= 1)
  }

  console.log(rateData.value)
  console.log(voted)

  voted[companyName] = rate.value
  localStorage.setItem(LOCAL_KEY, JSON.stringify(voted))

  pending.value = true
  try {
    message.value = ''
    const data = await $fetch('/api/rate', {
      body: {
        uid: companyName,
        rate: rate.value,
        oldRate,
      },
      method: 'POST',
    })
    rateData.value = data as RateData
  }
  catch (e) {
    message.value = (e as Error).message
  }
  finally {
    pending.value = false
  }
}

const totalPeople = computed(() => {
  return Object.values(rateData.value).reduce((p, n) => p + n, 0)
})

onMounted(() => {
  const stored = localStorage.getItem(LOCAL_KEY)
  if (stored) {
    voted = JSON.parse(stored)
    rate.value = voted[companyName] || 0
  }
  if (rate.value)
    onChange(true)
})
</script>

<template>
  <div id="app" class="w-80 grid grid-cols-[7rem_1fr] grid-rows-3">
    <div ref="rateWrapperRef" class="row-span-2 p-1 overflow-hidden h-20">
      <div
        v-for="item in emojis"
        :key="item"
        class="w-18 h-18 flex justify-center items-center snap-y mb-2 text-7xl"
      >
        {{ item }}
      </div>
    </div>
    <div class="text-center leading-8">
      Youre vote: ❓
    </div>
    <div>
      <div class="rating rating-lg flex-row-reverse" @change="onChange">
        <input
          v-for="item in 5"
          :key="item"
          v-model="rate"
          type="radio"
          name="rating-2"
          class="mask mask-star-2"
          :class="{ active: 6 - item === rate }"
          :value="6 - item"
          :disabled="pending"
        >
      </div>
    </div>
    <div class="col-span-2 text-center pt self-center">
      Ranks:
      <span class="font-bold text-slate-200">{{ rate * 2 }}/10</span>
      <span class="pl-3 text-slate-500 text-sm">({{ totalPeople }} peoples involved)</span>
    </div>
    <div v-if="!!message" class="col-span-2 alert alert-error">
      {{ message }}
    </div>
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
