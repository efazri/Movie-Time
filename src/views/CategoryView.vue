<template>
  <div>
    <div style="background: #ffffff0d" class="h-80 absolute top-0 w-full"></div>
    <div class="home flex justify-center relative top-0">
      <div class="w-11/12 p-3">
        <div class="flex justify-between mb-8 mt-12">
          <div>
            <div class="border-t-4 border-orange-600 w-1/2 mb-1" />
            <h1 class="text-white text-4xl font-bold">
              {{ genre.toUpperCase() }}
            </h1>
          </div>
        </div>
        <div>
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
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "@/components/CardMovie.vue";
import { movieList } from "../assets/fakeDb/movieList";

export default {
  name: "Movie-Category",
  data() {
    return {
      moviesData: [],
      movieList: movieList.filter(
        (el) => el.type.toLocaleLowerCase() === "series"
      ),
      selectedGenre: "",
      popularity: "",
      genre: null,
    };
  },
  components: {
    CardMovie,
  },
  methods: {
    onLoadMore() {
      if (movieList.length > 12) {
        this.moviesData = this.movieList.filter(
          (el, i) =>
            i < this.moviesData.length + 5 &&
            el.type.toLocaleLowerCase() === "series"
        );
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
    filterByGenre(genre) {
      const newData = movieList.filter(
        (el) => el.genre.toLocaleLowerCase() === genre
      );
      const sliceData = newData.slice(0, 12);
      this.moviesData = sliceData;
      this.movieList = newData;
    },
    onFilterPopularity(type, order) {
      let newData;
      if (type === "rating") {
        if (order === "DESC") {
          newData = movieList.sort(
            (a, b) => Number(b.rating) - Number(a.rating)
          );
        } else {
          newData = movieList.sort(
            (a, b) => Number(a.rating) - Number(b.rating)
          );
        }
      } else if (type === "popularity") {
        if (order === "DESC") {
          newData = movieList.sort((a, b) => Number(b.score) - Number(a.score));
        } else {
          newData = movieList.sort((a, b) => Number(a.score) - Number(b.score));
        }
      }
      const seriesData = movieList.filter(
        (el) => el.type.toLocaleLowerCase() === "series"
      );
      const sliceData = seriesData.slice(0, 12);

      this.moviesData = sliceData;
      this.movieList = newData.filter(
        (el) => el.type.toLocaleLowerCase() === "series"
      );
    },
  },
  watch: {
    selectedGenre(newData) {
      if (newData) {
        this.filterByGenre(newData);
      } else {
        this.movieList = movieList.filter(
          (el) => el.type.toLocaleLowerCase() === "series"
        );
        const seriesData = movieList.filter(
          (el) => el.type.toLocaleLowerCase() === "series"
        );
        const sliceData = seriesData.slice(0, 12);
        this.moviesData = sliceData;
      }
    },
    "$route.params.genre": {
      handler: function (genre) {
        this.genre = genre;
        this.filterByGenre(genre);
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    const selectedGenre = this.$route.params.genre;
    const newData = movieList.filter(
      (el) => el.genre.toLocaleLowerCase() === selectedGenre
    );
    const sliceData = newData.slice(0, 12);
    this.moviesData = sliceData;
    this.movieList = newData;
  },
};
</script>
