<template>
  <div class="home flex justify-center">
    <div class="w-11/12 p-3">
      <div class="flex justify-between mb-8">
        <div>
          <div class="border-t-4 border-orange-600 w-1/2 mb-1" />
          <h1 class="text-white text-2xl font-bold">Discover Movies</h1>
        </div>

        <div class="flex gap-4">
          <div
            class="bg-rose-600 flex items-center h-full px-4 py-0 rounded-full w-36 justify-center text-white font-semibold"
          >
            Popularity
          </div>

          <div
            class="bg-neutral-800 flex items-center h-full px-4 py-0 rounded-full w-36 justify-center text-white font-semibold"
          >
            Release Date
          </div>
        </div>
      </div>

      <div class="grid grid-cols-5 gap-8">
        <CardMovie v-for="(movie, i) in movieList" :movie="movie" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "@/components/CardMovie.vue";
import { movieList } from "../assets/fakeDb/movieList";

export default {
  name: "HomeView",
  components: {
    CardMovie,
  },
  data() {
    return {
      movieList,
    };
  },
};
</script>
