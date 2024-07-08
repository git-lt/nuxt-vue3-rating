<script setup lang='ts'>
function createAnimation(scrollStart, scrollEnd, startValue, endValue) {
  return function (x) {
    if (x < scrollStart)
      return startValue

    if (x > scrollEnd)
      return endValue

    const progress = (x - scrollStart) / (scrollEnd - scrollStart)
    return startValue + (endValue - startValue) * progress
  }
}

const animationMap = new Map()

function getDomAnimation(scrollStart, scrollEnd, dom) {
  const { clientHeight, clientWidth, offsetTop, offsetLeft } = dom
  const rect = list.getBoundingClientRect()

  const opacityAnimation = createAnimation(scrollStart, scrollEnd, 0, 1)
  const scaleAnimation = createAnimation(scrollStart, scrollEnd, 0.5, 1)
  const xAnimation = createAnimation(scrollStart, scrollEnd, rect.width / 2 - clientWidth / 2 - offsetLeft, 0)
  const yAnimation = createAnimation(scrollStart, scrollEnd, rect.height / 2 - clientHeight / 2 - offsetTop, 0)

  const opacity = x => opacityAnimation(x)
  const transform = x => `translate(${xAnimation(x)}px, ${yAnimation(x)}px) scale(${scaleAnimation(x)})`

  return { opacity, transform }
}

function updateMap() {
  const playGroundRect = playGround.getBoundingClientRect()
  const scrollY = window.scrollY
  const scrollStart = playGroundRect.top + scrollY
  const scrollEnd = playGroundRect.bottom = scrollY - window.innerHeight

  for (const item of items)
    animationMap.set(item, getDomAnimation(scrollStart, scrollEnd, item))
}
// updateMap()

function updateStyles() {
  const scrollY = window.scrollY
  for (const [dom, animations] of animationMap) {
    for (const prop in animations) {
      const value = animations[prop](scrollY)
      console.log(prop, value)
      dom.style[prop] = value
    }
  }
}

function randomOpacity() {
  return Math.random().toFixed(3)
}

function initPosition() {
  // 1. 获取父容器中心点的位置
  // 2. 遍历所有item，设置transform 到中心点 添加随机的缩放
  // const center =
}

onMounted(() => {
  // const items = document.querySelectorAll('.liste-item')
  // const playGround = document.querySelector('.playGround')
  // const list = document.querySelector('list')

  // window.addEventListener('scroll', updateStyles)
})
</script>

<template>
  <div class="w-full">
    <div>
      <div>
        HEADER
      </div>
      <div class="playground">
        <div class="animation-container bg-slate-500 flex justify-center h-[100vh]">
          <div class="list flex gap-8 flex-wrap w-[752px] list-none content-center">
            <div data-order="0" class="list-item w-20 h-20 bg-yellow-300  rounded-lg" />
            <div data-order="1" class="list-item w-20 h-20 bg-blue-600  rounded-lg" />
            <div data-order="2" class="list-item w-20 h-20 bg-red-500  rounded-lg" />
            <div data-order="3" class="list-item w-20 h-20 bg-orange-600  rounded-lg" />
            <div data-order="2" class="list-item w-20 h-20 bg-blue-300  rounded-lg" />
            <div data-order="1" class="list-item w-20 h-20 bg-blue-600    rounded-lg" />
            <div data-order="0" class="list-item w-20 h-20 bg-amber-600  rounded-lg" />
            <div data-order="0" class="list-item w-20 h-20 bg-green-500  rounded-lg" />
            <div data-order="1" class="list-item w-20 h-20 bg-indigo-500  rounded-lg" />
            <div data-order="2" class="list-item w-20 h-20 bg-blue-300 rounded-lg" />
            <div data-order="3" class="list-item w-20 h-20 bg-orange-600  rounded-lg" />
            <div data-order="2" class="list-item w-20 h-20 bg-blue-600   rounded-lg" />
            <div data-order="1" class="list-item w-20 h-20 bg-red-500   rounded-lg" />
            <div data-order="0" class="list-item w-20 h-20 bg-indigo-500  rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  /* opacity: 0; */
}
</style>
