<template>
  <div>
    <div
      style="background: #ffffff0d; height: 90vh"
      class="absolute top-0 w-full"
    ></div>
    <Carousel />
    <div class="home flex justify-center mt-16">
      <div class="w-11/12 p-3">
        <div class="flex justify-between mb-8">
          <div>
            <div class="border-t-8 border-orange-600 w-1/2 mb-2" />
            <h1 class="text-white text-4xl font-bold">Discover Movies</h1>
          </div>

          <div class="flex gap-4">
            <div id="app" class="flex items-center justify-center bg-gray-100">
              <div class="relative text-lg w-48">
                <button
                  class="flex bg-rose-600 items-center justify-center px-3 py-2 w-full rounded-full"
                  :class="
                    !selectedOption.includes('Release Date')
                      ? 'bg-rose-600'
                      : 'bg-slate-700'
                  "
                  @click="isOptionsExpanded = !isOptionsExpanded"
                  @blur="isOptionsExpanded = false"
                >
                  <span class="text-sm font-bold text-white">
                    {{
                      !selectedOption.includes("Release Date")
                        ? selectedOption
                        : "Popularity"
                    }}
                  </span>
                </button>
                <transition
                  enter-active-class="transform transition duration-500 ease-custom"
                  enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                  enter-to-class="translate-y-0 scale-y-100 opacity-100"
                  leave-active-class="transform transition duration-300 ease-custom"
                  leave-class="translate-y-0 scale-y-100 opacity-100"
                  leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
                >
                  <ul
                    v-show="isOptionsExpanded"
                    class="absolute left-0 right-0 mb-4 bg-black rounded-md shadow-lg overflow-hidden"
                    style="z-index: 9999"
                  >
                    <li
                      v-for="(option, index) in options"
                      :key="index"
                      class="px-3 py-2 transition-colors duration-300 hover:bg-slate-700 cursor-pointer"
                      @mousedown.prevent="setOption(option)"
                      @click="this.selectedOption = option"
                    >
                      <span class="text-sm text-white">{{ option }}</span>
                    </li>
                  </ul>
                </transition>
              </div>
            </div>

            <div id="app" class="flex items-center justify-center bg-gray-100">
              <div class="relative text-lg w-48">
                <button
                  class="flex items-center justify-center px-3 py-2 w-full rounded-full"
                  :class="
                    selectedOption.includes('Release Date')
                      ? 'bg-rose-600'
                      : 'bg-slate-700'
                  "
                  @click="isOptionsReleaseExpanded = !isOptionsReleaseExpanded"
                  @blur="isOptionsReleaseExpanded = false"
                >
                  <span class="text-sm font-bold text-white">
                    {{
                      selectedOption.includes("Release Date")
                        ? selectedOption
                        : "Release Date"
                    }}
                  </span>
                </button>
                <transition
                  enter-active-class="transform transition duration-500 ease-custom"
                  enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                  enter-to-class="translate-y-0 scale-y-100 opacity-100"
                  leave-active-class="transform transition duration-300 ease-custom"
                  leave-class="translate-y-0 scale-y-100 opacity-100"
                  leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
                >
                  <ul
                    v-show="isOptionsReleaseExpanded"
                    class="absolute left-0 right-0 mb-4 bg-black rounded-md shadow-lg overflow-hidden"
                    style="z-index: 9999"
                  >
                    <li
                      v-for="(option, index) in optionsReleaseData"
                      :key="index"
                      class="px-3 py-2 transition-colors duration-300 hover:bg-slate-700 cursor-pointer"
                      @mousedown.prevent="setOption(option)"
                      @click="this.selectedOption = option"
                    >
                      <span class="text-sm text-white">{{ option }}</span>
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-5 gap-8">
          <CardMovie v-for="(movie, i) in moviesData" :movie="movie" :key="i" />
        </div>
        <div class="mt-12" v-if="moviesData.length < movieList.length">
          <button
            class="bg-rose-700 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded-full w-1/6"
            @click="onLoadMore"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "@/components/CardMovie.vue";
import Carousel from "@/components/Carousel.vue";
import { movieList } from "../assets/fakeDb/movieList";

export default {
  name: "HomeView",
  components: {
    CardMovie,
    Carousel,
  },
  computed: {
    movieList() {
      return this.$store.state.moviesList;
    },
    moviesData() {
      return this.$store.state.moviesData;
    },
    options() {
      return this.$store.state.options;
    },
    optionsReleaseData() {
      return this.$store.state.optionsReleaseData;
    },
  },
  data() {
    return {
      isOptionsExpanded: false,
      isOptionsReleaseExpanded: false,
      selectedOption: "Popularity Ascending",
    };
  },
  methods: {
    setOption(option) {
      this.selectedOption = option;
      if (option.includes("Release Date")) {
        this.isOptionsReleaseExpanded = false;
      } else {
        this.isOptionsExpanded = false;
      }
    },
    onLoadMore() {
      if (this.movieList.length > 12) {
        const newData = this.movieList.filter(
          (el, i) => i < this.moviesData.length + 5
        );
        this.$store.commit("setMoviesData", newData);
      }
    },
  },
  watch: {
    selectedOption(newData) {
      let order = "";
      let type = "";

      if (newData.includes("Rating")) {
        type = "rating";
      } else if (newData.includes("Popularity")) {
        type = "score";
      } else if (newData.includes("Release")) {
        type = "year";
      }

      if (newData.includes("Desc")) {
        order = "DESC";
      } else if (newData.includes("Asc")) {
        order = "ASC";
      }
      const payload = { order, type, endSlice: 10 };
      this.$store.dispatch("onFilterByPopularity", payload);
    },
  },
  created() {
    let newData = movieList.slice(0, 10);
    this.$store.commit("setMoviesData", newData);
    this.$store.commit("setMoviesList", movieList);
  },
};
</script>

<style scoped>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
