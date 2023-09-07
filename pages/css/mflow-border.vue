<template>
  <div class="w-full h-full bg-black flex justify-center items-center">
    <div class="mflow-box flex justify-center items-center overflow-hidden w-52 h-32 rounded-3xl relative before:w-[calc(100%-6px)] before:h-[calc(100%-6px)] before:bg-black before:rounded-3xl before:absolute before:top-[3px] before:left-[3px] before:z-10 after:absolute after:w-[300%] after:h-[300%] after:rounded-3xl  after:z-0 after:top-[-100%] after:left-[-100%]">
      <div class="text-orange-400 text-3xl z-20 absolute">
        流光边框
      </div>
    </div>
    <div class="w-8" />
    <div class="mflow-box2 flex justify-center items-center overflow-hidden w-52 h-32 rounded-3xl relative before:w-[calc(100%-6px)] before:h-[calc(100%-6px)] before:bg-black before:rounded-3xl before:absolute before:top-[3px] before:left-[3px] before:z-10 after:absolute after:w-[300%] after:h-[300%] after:rounded-3xl  after:z-0 after:top-[-100%] after:left-[-100%]">
      <div class="text-orange-400 text-3xl z-20 absolute">
        流光边框
      </div>
    </div>
  </div>
</template>

<style>
.mflow-box::after {
  animation: rotate 5s linear infinite;
  background-image: conic-gradient(#eeeeee22, #f0c237, #eeeeee22 30%);
}

.mflow-box2::after {
  animation: rotate 5s linear infinite;
  background-image: conic-gradient(#eeeeee22, #fc97e9, #e7d0fe, #cca9fd, #02eded, #adf674, #fefe05, #fec900, #eeeeee22 60%);
}

@keyframes rotate {
    to {
      transform: rotate(360deg);
    }
}
</style>
