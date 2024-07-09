<script setup lang='ts'>
const props = defineProps<Props>()

const cardRef = ref<HTMLDivElement>()

interface Props {
  mousePosition: { x: number; y: number }
  icon: string
  title: string
  desc: string
  img: string
}
const cardRect = ref({
  left: 0,
  top: 0,
})

watch(() => props.mousePosition, () => {
  // 计算位置
  if (!cardRef.value)
    return
  const cardEl = cardRef.value
  const { left, top } = cardRect.value
  const x = props.mousePosition.x - left
  const y = props.mousePosition.y - top
  // console.log(x, y)
  cardEl.style.setProperty('--x', `${x}px`)
  cardEl.style.setProperty('--y', `${y}px`)
})

function setCardRect() {
  if (!cardRef.value)
    return
  const { left, top } = cardRef.value.getBoundingClientRect()
  cardRect.value = { left, top }
}

onMounted(() => {
  setCardRect()
  window.addEventListener('resize', setCardRect)
})
onUnmounted(() => {
  window.removeEventListener('resize', setCardRect)
})
</script>

<template>
  <div ref="cardRef" class="card-item rounded-lg overflow-hidden bg-[#393838] w-[270px] h-[270px] relative before:block before:absolute before:inset-0 before:content-[' ']">
    <div class="inner absolute bg-[#161616]/80 inset-[1px] z-10 rounded-lg">
      <div class="h-[160px]">
        <img decoding="async" :src="img" alt="">
      </div>
      <div class="flex gap-2 p-2">
        <Icon :name="icon" color="white" size="28px" />
        <div>
          <div class="text-white mb-1">
            {{ title }}
          </div>
          <div class="text-sm text-slate-500">
            {{ desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-item::before {
  z-index: 1;
  border-radius: inherit;
  opacity: 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 12px 12px;
  transition: opacity 400ms ease 0s;
  will-change: opacity backgroun-image;
  background-image: radial-gradient(
   600px circle at var(--x) var(--y),
    rgba(255, 255, 255, 0.3),
    transparent 40%
  )
}
</style>
