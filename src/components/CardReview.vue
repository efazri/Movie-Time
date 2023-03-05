<template>
  <div
    class="p-3 px-4 bg-white rounded-lg shadow h-72 w-full"
    style="background: #f9f9f9"
  >
    <div class="flex justify-between">
      <div class="flex">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <div class="flex align-items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="/movies-poster/wonder_women_1984.png"
                alt="Neil image"
                style="object-fit: cover"
              />
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-bold truncate text-black text-left">
              {{ item.name }}
            </p>
            <p class="text-xs text-gray-500 truncate dark:text-gray-400">
              {{ item.createdAt }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="h-100 flex items-center bg-gray-200 px-1 py-1 rounded-md">
          <img src="/logo/star.png" style="width: 10px" />
          <span class="font-bold text-2xl ml-2 mt-1">{{ item.rating }}</span>
        </div>
      </div>
    </div>
    <div class="mt-5 multiline-ellipsis text-md">
      {{ item.comment }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Card-Review",
  props: ["item"],
};
</script>

<style scoped>
.multiline-ellipsis {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */
  text-align: left;
}
</style>
