<script>
import { movieList } from "@/assets/fakeDb/movieList";
export default {
  name: "nav-bar",
  data() {
    return {
      isOptionsExpanded: false,
      isOptionsReleaseExpanded: false,
      selectedOption: "Popularity Ascending",
      options: [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "History",
        "Horor",
      ],
      optionsReleaseData: ["Release Date Ascending", "Release Date Descending"],
      search: "",
      movieListName: [],
    };
  },
  methods: {
    onSelectGenre(genre) {
      this.$router.push({
        name: "category",
        params: { genre: genre.toLowerCase() },
      });
    },
    getBoldSearch(data) {
      return data.replaceAll(this.search, `<b>${this.search}</b>`);
    },
    onSelectMovie(id) {
      this.search = "";
      this.$router.push(`/movie/${id}`);
    },
  },
  watch: {
    search(newData) {
      const dataName = movieList.filter((el) => {
        if (el.name.toLocaleLowerCase().includes(newData.toLocaleLowerCase())) {
          return el;
        }
      });
      console.log(dataName);
      this.movieListName = dataName;
    },
  },
};
</script>
<template>
  <div
    style="background: rgb(0, 0, 0, 0.1); z-index: 40"
    class="p-3 flex justify-center"
  >
    <div class="w-11/12 flex gap-x-8">
      <router-link to="/">
        <div class="flex-none">
          <div class="flex items-center h-full">
            <img src="/logo/movieTimeLogo.png" style="width: 100%" />
          </div>
        </div>
      </router-link>
      <div
        class="inline-flex flex-col justify-center w-full relative text-gray-500"
      >
        <form class="flex items-center">
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <div class="flex items-center h-full">
                <img src="/logo/iconfinder.png" style="width: 25px" />
              </div>
            </div>
            <input
              type="text"
              class="ml-1 text-gray-900 text-sm rounded-md block w-full pl-10 p-2.5 dark:text-white"
              placeholder="Find movie"
              style="background: #25282f"
              v-model="search"
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              />
            </button>
          </div>
        </form>
        <ul
          class="bg-black ml-1 mt-2 absolute top-8 w-full"
          :class="search ? 'show' : 'hidden'"
        >
          <li
            class="pl-4 pr-2 py-1 text-white relative cursor-pointer hover:bg-gray-500 hover:text-gray-900 text-left"
            v-for="(movie, i) in movieListName"
            :key="i"
            @click="onSelectMovie(movie.id)"
          >
            <div v-html="getBoldSearch(movie.name)"></div>
          </li>
        </ul>
      </div>

      <div class="flex-none flex justify-between p-1 rounded w-3/12">
        <div class="flex items-center justify-center">
          <div class="relative">
            <button
              class="text-white font-semibold hover:text-rose-700"
              @click="isOptionsExpanded = !isOptionsExpanded"
              @blur="isOptionsExpanded = false"
            >
              <font-awesome-icon icon="fa-solid fa-grip" class="mr-3" />
              <span>CATEGORIES</span>
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
                  class="px-3 text-left py-2 transition-colors duration-300 hover:bg-slate-700 cursor-pointer"
                  @mousedown.prevent="setOption(option)"
                  @click="onSelectGenre(option)"
                >
                  <span class="text-sm text-white">{{ option }}</span>
                </li>
              </ul>
            </transition>
          </div>
        </div>
        <router-link
          to="/movies"
          class="text-white font-semibold hover:text-rose-700 flex flex-col justify-center"
        >
          <div>
            <span>MOVIES</span>
          </div>
        </router-link>
        <router-link
          to="/series"
          class="text-white font-semibold hover:text-rose-700 flex flex-col justify-center"
        >
          <div>
            <span>TV SHOWS</span>
          </div>
        </router-link>
        <router-link
          to="/series"
          class="text-white font-semibold hover:text-rose-700 flex flex-col justify-center"
        >
          <div>
            <span>LOGIN</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
