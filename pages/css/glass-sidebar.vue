<script lang="ts" setup>
// import bgImg from '~/assets/images/1152266.jpg'
</script>

<template>
  <div class="wrapper w-full h-full bg-cover flex justify-center items-center">
    <nav class="w-80 min-h-min p-4 rounded-xl backdrop-blur-lg bg-indigo-100/70 border-2 border-indigo-100/70 shadow-xl transition-all duration-500 ease-[cubic-bezier(.8, .5, .5, .8)] hover:w-80">
      <div class="w-full flex items-center">
        <img src="~/assets/images/profile3.png" alt="" class="w-16 h-16 rounded-full border-4 border-indigo-100/80">
        <p class="text-gray-500 font-medium ml-3 leading-6">
          Good day,
          <span class=" block text-2xl text-slate-800">Hossein</span>
        </p>
      </div>
      <div class=" my-8 rounded-[30%] h-[2px] bg-slate-800 " />
      <ul class=" w-full">
        <li class=" flex my-3 p-5 cursor-pointer rounded-lg transition-all duration-300 ease-in-out">
          <!-- <div class="bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text">
            <Icon name="ic:round-home" class="text-2xl fill-transparent" />
          </div> -->
          <i class="menu-icon w-10 h-10 block" />
          <span class="text-lg font-medium ml-3 text-gray-500 ">Dashboard</span>
        </li>
        <li><Icon name="ic:sharp-person" /><span>Accounts</span></li>
        <li><Icon name="ic:baseline-store-mall-directory" /><span>Orders</span></li>
        <li><Icon name="ic:baseline-bar-chart" /><span>Charts</span></li>
        <li><Icon name="ic:baseline-phone" /><span>Support</span></li>
        <hr>
        <li><Icon name="ic:outline-logout" /><span>Logout</span></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  /* color:   #505257 */

  font-family: 'Roboto', sans-serif;
  background-image: url('~/assets/images/1152266.jpg');
}
.menu-icon {
  background: linear-gradient(
        -135deg,
        #3c3e43,
        #838487
    );
  mask: url('~/assets/svg/ic-round-home.svg');
  mask-repeat: no-repeat;
  mask-size: contain;
}
</style>
