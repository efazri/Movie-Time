<script>
export default {
  name: "nav-bar",
};
</script>
<template>
  <div style="background: #2a2e35" class="p-3 flex justify-center">
    <div class="w-11/12 flex gap-x-8">
      <div class="flex-none">
        <div class="flex items-center h-full">
          <img src="/logo/movieTimeLogo.png" style="width: 100px" />
        </div>
      </div>

      <div class="flex p-1 rounded w-8/12" style="background: #25282f">
        <div class="flex items-center h-full ml-1">
          <img src="/logo/iconfinder.png" style="width: 25px" />
        </div>
        <input
          class="shadow appearance-none w-full py-1 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          style="background: #25282f"
        />
        <div class="flex-none pr-2">
          <div class="flex items-center h-full">
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="text-white"
            />
          </div>
        </div>
      </div>

      <div class="flex-none flex justify-between p-1 rounded w-3/12">
        <div class="flex items-center h-full">
          <font-awesome-icon icon="fa-solid fa-grip" class="text-white mr-3" />
          <span class="text-white">CATEGORIES</span>
        </div>

        <div class="flex items-center h-full">
          <span class="text-white">MOVIES</span>
        </div>
        <div class="flex items-center h-full">
          <span class="text-white">TV SHOWS</span>
        </div>
        <div class="flex items-center h-full">
          <span class="text-white">LOGIN</span>
        </div>
      </div>
    </div>
  </div>
</template>
