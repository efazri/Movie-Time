<template>
  <div>
    <div style="background: #ffffff0d" class="h-80 absolute top-0 w-full"></div>
    <div class="home flex justify-center relative top-0">
      <div class="w-11/12 p-3">
        <div class="flex justify-between mb-8 mt-12">
          <div>
            <div class="border-t-4 border-orange-600 w-1/2 mb-1" />
            <h1 class="text-white text-4xl font-bold">TV Series</h1>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-8">
          <div>
            <Filter
              :popularity="popularity"
              :selectedGenre="selectedGenre"
              @onChangeGenre="onChange"
              @onChangePopularity="onChangePopularity"
            />
          </div>
          <div class="col-span-3">
            <div v-if="moviesData.length > 0">
              <div class="grid grid-cols-4 gap-8">
                <CardMovie
                  v-for="movie in moviesData"
                  :key="movie.id"
                  :movie="movie"
                />
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
            <div
              v-if="moviesData.length === 0"
              class="h-full flex flex-col justify-center"
            >
              <div class="flex justify-center">
                <font-awesome-icon
                  icon="fa-solid fa-server"
                  class="w-36 h-36 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                />
              </div>
              <p class="mt-6 text-white">No Movies Founded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "@/components/CardMovie.vue";
import Filter from "@/components/Filter.vue";
import { movieList } from "../assets/fakeDb/movieList";

export default {
  name: "Movie-Category",
  computed: {
    movieList() {
      return this.$store.state.moviesList;
    },
    moviesData() {
      return this.$store.state.moviesData;
    },
  },
  data() {
    return {
      selectedGenre: "",
      popularity: "",
    };
  },
  components: {
    CardMovie,
    Filter,
  },
  methods: {
    onLoadMore() {
      if (this.movieList.length > 12) {
        const newMoviesData = this.movieList.filter(
          (el, i) =>
            i < this.moviesData.length + 5 &&
            el.type.toLocaleLowerCase() === "series"
        );
        this.$store.commit("setMoviesData", newMoviesData);
      }
    },
    onChange(val) {
      if (this.selectedGenre === val) {
        this.selectedGenre = "";
      } else {
        this.selectedGenre = val;
      }
    },
    onChangePopularity(val) {
      this.popularity = val;
    },
  },
  watch: {
    selectedGenre(newData) {
      if (newData) {
        this.$store.dispatch("onFilterByGenre", {
          genre: newData,
          sliceEnd: 12,
          category: "series",
        });
      } else {
        this.$store.dispatch("onResetData", {
          category: "series",
          sliceEnd: 12,
        });
      }
    },
    popularity(newData) {
      let order = "";
      let type = "";

      if (newData.includes("Rating")) {
        type = "rating";
      } else if (newData.includes("Popularity")) {
        type = "score";
      }

      if (newData.includes("Desc")) {
        order = "DESC";
      } else if (newData.includes("Asc")) {
        order = "ASC";
      }

      const payload = { order, type, endSlice: 12, category: "series" };
      this.$store.dispatch("onFilterByPopularity", payload);
    },
  },
  created() {
    const newDataList = movieList.filter(
      (el) => el.type.toLocaleLowerCase() === "series"
    );
    let newData = newDataList.slice(0, 12);
    this.$store.commit("setMoviesData", newData);
    this.$store.commit("setMoviesList", newDataList);
  },
};
</script>
