<template>
  <div
    class="absolute bottom-0 w-full py-2 flex"
    style="background: rgba(0, 0, 0, 0.6)"
  >
    <div class="grid grid-cols-3 gap-4">
      <div class="flex justify-end">
        <img
          :src="dataMovie.image"
          class="absolute w-72 -top-60"
          style="z-index: 10"
        />
      </div>
      <div class="col-span-2">
        <div
          class="grid grid-cols-5 gap-2 divide-x divide-slate-400 divide-opacity-50"
        >
          <div class="p-4 text-white border-none ml-3">
            <div class="flex gap-2">
              <div class="flex items-center h-full">
                <div class="h-100 flex items-center">
                  <img src="/logo/star.png" style="width: 25px" />
                  <span class="font-bold text-2xl text-white ml-2 mt-1">{{
                    dataMovie.rating
                  }}</span>
                </div>
              </div>
              <div class="flex items-center h-100">
                <div class="flex flex-col">
                  <span class="text-xs">USER SCORE</span>
                  <span class="text-xs font-semibold text-white text-left">{{
                    dataMovie.score
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 text-white">
            <div class="flex gap-2">
              <div class="flex items-center h-100 mt-1">
                <div class="flex flex-col" style="text-align: left">
                  <span class="text-xs">STATUS</span>
                  <span class="text-xs font-semibold text-white uppercase"
                    >RELEASED</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 text-white">
            <div class="flex gap-2">
              <div class="flex items-center h-100 mt-1">
                <div class="flex flex-col" style="text-align: left">
                  <span class="text-xs">LANGUAGE</span>
                  <span class="text-xs font-semibold text-white uppercase">{{
                    dataMovie.language
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 text-white">
            <div class="flex gap-2">
              <div class="flex items-center h-100 mt-1">
                <div class="flex flex-col" style="text-align: left">
                  <span class="text-xs">BUDGET</span>
                  <span class="text-xs font-semibold text-white"
                    >${{ dataMovie.bugdet }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 text-white">
            <div class="flex gap-2">
              <div class="flex items-center h-100 mt-1">
                <div class="flex flex-col" style="text-align: left">
                  <span class="text-xs">PRODUCTION</span>
                  <span class="text-xs font-semibold text-white uppercase">{{
                    dataMovie.production
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie-Detail-Component",
  props: ["dataMovie"],
};
</script>
