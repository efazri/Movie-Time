<template>
  <div>
    <div>
      <div class="header" :style="`background-image: url(${dataMovie.image})`">
        <MovieDetail :dataMovie="dataMovie" />
      </div>
      <div class="main_container">
        <div class="w-full py-5">
          <div class="grid grid-cols-4 gap-4">
            <div></div>
            <div class="col-span-3">
              <div class="px-12">
                <div
                  class="flex flex-col justify-start w-5/12"
                  style="text-align: left"
                >
                  <span class="text-rose-500 font-bold">OVERVIEW</span>
                  <span>
                    {{ dataMovie.overview }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-start w-full px-48 py-12">
          <div class="flex flex-col w-full">
            <div class="pl-2" style="text-align: left">
              <span class="text-rose-500 font-bold">REVIEWS</span>
            </div>

            <div class="pl-2 mt-3">
              <swiper
                :slidesPerView="2"
                :spaceBetween="100"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
              >
                <swiper-slide
                  v-for="review in dataMovie.reviews"
                  :key="review.id"
                >
                  <CardReview :item="review" />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <div class="text-left px-48" style="position: relative">
        <p class="text-white font-bold">RECOMENDATION MOVIES</p>
        <div class="grid grid-cols-5 gap-8 mt-10">
          <CardMovie
            v-for="movie in recommendationMovies"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { movieList } from "../assets/fakeDb/movieList";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import CardMovie from "@/components/CardMovie.vue";
import CardReview from "@/components/CardReview.vue";
import MovieDetail from "@/components/MovieDetail.vue";
import "swiper/css";
import "swiper/css/pagination";
export default {
  name: "Movie-Component",
  components: {
    CardMovie,
    CardReview,
    Swiper,
    SwiperSlide,
    MovieDetail,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      recommendationMovies: movieList
        .slice(0, 5)
        .filter((el) => el.id !== +this.id),
      movieList,
      dataMovie: null,
      id: this.$route.params.id,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.getSelectedData(id);
  },
  methods: {
    getSelectedData(id) {
      const selectedData = this.movieList.filter((el) => el.id === +id);
      this.dataMovie = selectedData[0];
    },
  },
  watch: {
    "$route.params.id": {
      handler: function (id) {
        this.getSelectedData(id);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style scoped>
.main_container {
  background: white;
  position: relative;
  top: -5em;
  z-index: 6;
}
.header {
  height: 35em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  top: -5em;
}
.swiper {
  padding: 1em 0em;
  background: transparent !important;
}
</style>
