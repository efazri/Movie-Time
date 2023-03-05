<template>
  <div>
    <swiper
      :slidesPerView="3"
      :spaceBetween="100"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
    >
      <swiper-slide
        v-slot="{ isNext }"
        v-for="movie in movieList"
        :key="movie.id"
      >
        <div class="pb-16">
          <div class="flex" :class="isNext ? 'active-slide' : 'inactive-slide'">
            <img :src="movie.image" style="width: 50%" />
            <div class="flex items-center w-full">
              <div class="bg-black p-6" style="text-align: left">
                <div class="h-100 flex items-center mb-2">
                  <img src="/logo/star.png" style="width: 13px" />
                  <span class="font-bold text-xl text-white ml-2 mt-1">
                    {{ movie.rating }}
                  </span>
                </div>
                <span class="text-white font-bold text-3xl">
                  {{ movie.name }}
                </span>
                <div class="flex my-2">
                  <span class="text-white">{{ movie.year }}</span>
                  <div class="flex items-center">
                    <div class="mx-2 bullet" />
                  </div>
                  <span class="text-white">{{ movie.genre }}</span>
                </div>
                <span class="text-sm text-white">
                  When the crew of a space junk collector ship called The
                  Victory discovers a humanoid robot named Dorothy that's known
                  to be a weapon of mass destruction, they get involved in a
                  riskybusiness deal which puts their lives at stake.
                </span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { movieList } from "../assets/fakeDb/movieList";

export default {
  name: "carousel-component",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      movieList,
    };
  },
};
</script>
<style>
.swiper {
  background: #1f232a !important;
  padding: 3rem 0rem;
}
.swiper-pagination {
  padding-bottom: 2em !important;
}
.swiper-pagination-bullet {
  background: #ffffff80 !important;
  height: 10px !important;
  width: 10px !important;
}
.swiper-pagination-bullet-active {
  width: 3em !important;
  height: 10px !important;
  border-radius: 10px !important;
  background: #e74c3c !important;
}
.active-slide {
  opacity: 1;
}
.inactive-slide {
  opacity: 0.3;
}
</style>
