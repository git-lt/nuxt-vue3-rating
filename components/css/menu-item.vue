<script setup lang="ts">
defineProps<{
  name: string
  active: boolean
  index: number
}>()
</script>

<template>
  <li class="flex my-3 p-5 cursor-pointer rounded-lg transition-colors !duration-500 ease-in-out hover:bg-slate-100/20 text-gray-800" :class="{ active }">
    <i class="menu-icon w-7 h-7 block flex-shrink-0" :class="[`menu-icon__${name.toLowerCase()}`]" />
    <span class="text-lg font-medium ml-3 opacity-0 translate-x-5 group-hover/nav:animate-fadeInRight" :style="`animation-delay: ${0.1 + (index * 0.1)}s;`">{{ name }}</span>
  </li>
</template>

<style scoped>
.menu-icon {
  background: linear-gradient(
        -135deg,
        #3c3e43,
        #838487
    );
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-position: center center;

  &__dashboard {
    mask-image: url('~/assets/svg/ic-round-home.svg');
  }
  &__support {
    mask-image: url('~/assets/svg/ic-baseline-phone.svg');
  }
  &__orders {
    mask-image: url('~/assets/svg/ic-baseline-store-mall-directory.svg');
  }
  &__logout {
    mask-image: url('~/assets/svg/ic-outline-logout.svg');
  }
  &__charts {
    mask-image: url('~/assets/svg/ic-baseline-bar-chart.svg');
  }
  &__accounts {
    mask-image: url('~/assets/svg/ic-sharp-person.svg');
  }
}
.active {
  @apply bg-blue-600 text-white;
  .menu-icon {
   background: #fff;
  }
}
</style>
