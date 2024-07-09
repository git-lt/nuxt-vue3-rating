<script setup lang='ts'>
const mousePosition = ref({ x: 0, y: 0 })

function onMouseMove(e: MouseEvent) {
  mousePosition.value = { x: e.clientX, y: e.clientY }
}
</script>

<template>
  <div class="p-4 bg-[#08090a] rounded-xl">
    <div class="card-wrap grid grid-cols-3 grid-rows-2 gap-4" @mousemove="onMouseMove">
      <CssHoverCardItem
        :mouse-position="mousePosition"
        img="https://cdn.sanity.io/images/ornj730p/production/13a6a62a3200a8c2f84f4dbb280f8c995153cfaf-1288x624.png?w=600&q=95&auto=format&dpr=2" icon="ic:twotone-edit-calendar" title="Issues" desc="Create new tasks and subtasks in seconds"
      />
      <!-- <CssHoverCardItem
        :mouse-position="mousePosition"
        img="https://cdn.sanity.io/images/ornj730p/production/21866580a95028a6ce19619fd5be74ddb88bed6f-1288x624.png?w=600&q=95&auto=format&dpr=2"
        icon="ic:twotone-edit-calendar" title="Issues" desc="Create new tasks and subtasks in seconds"
      /> -->
      <CssHoverCardItem
        :mouse-position="mousePosition"
        img="https://cdn.sanity.io/images/ornj730p/production/93624c5f7ae3b27d09af0a4c605b9c5c9f9076a7-644x404.png?w=600&q=95&auto=format&dpr=2"
        icon="ic:baseline-edit-notifications" title="Cycles" desc="Create new tasks and subtasks in seconds"
      />
      <CssHoverCardItem
        :mouse-position="mousePosition"
        img="https://cdn.sanity.io/images/ornj730p/production/26cb00bf39c3a0924eb8f118615721247122a3c7-1288x624.png?w=600&q=95&auto=format&dpr=2"
        icon="ic:baseline-add-alarm" title="Projects" desc="Create new tasks and subtasks in seconds"
      />
      <CssHoverCardItem
        :mouse-position="mousePosition"
        img="https://cdn.sanity.io/images/ornj730p/production/c46c47c504606b0ed7e1b5c427c8eb7b9ff50c79-1288x624.png?w=600&q=95&auto=format&dpr=2"
        icon="ic:baseline-access-alarms" title="Initiatives" desc="Create new tasks and subtasks in seconds"
      />
      <CssHoverCardItem
        :mouse-position="mousePosition"
        img="https://cdn.sanity.io/images/ornj730p/production/31752ddd7b1ae14d5536ac5e40b640a6780edb8c-1288x624.png?w=600&q=95&auto=format&dpr=2"
        icon="ic:baseline-assignment-ind" title="Teams" desc="Create new tasks and subtasks in seconds"
      />
      <CssHoverCardItem
        :mouse-position="mousePosition"
        img="https://cdn.sanity.io/images/ornj730p/production/13a6a62a3200a8c2f84f4dbb280f8c995153cfaf-1288x624.png?w=600&q=95&auto=format&dpr=2"
        icon="ic:baseline-attractions" title="Backlog" desc="Create new tasks and subtasks in seconds"
      />
    </div>
  </div>
</template>

<style>
.card-wrap:hover .card-item::before {
  opacity: 1;
}
</style>
