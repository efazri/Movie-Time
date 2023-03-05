<script>
export default {
  name: "card-movie",
  props: ["movie"],
  methods: {
    onViewMovie(id) {
      this.$router.push(`/movie/${id}`);
    },
  },
};
</script>

<template>
  <div class="main_container_card">
    <img :src="movie.image" class="image" />
    <div class="rating px-4 py-1">
      <span class="font-bold text-white">{{ movie.rating }}</span>
    </div>
    <div class="flex justify-start mt-2">
      <span class="text-white text-left font-semibold">{{ movie.name }}</span>
    </div>
    <div class="flex justify-start">
      <span class="text-white text-left font-thin">{{ movie.year }}</span>
    </div>

    <div class="preview">
      <div class="flex flex-col justify-center items-center h-full">
        <div class="flex items-center">
          <div class="h-100 flex items-center">
            <img src="/logo/star.png" style="width: 25px" />
            <span class="font-bold text-2xl text-white ml-2 mt-1">
              {{ movie.rating }}
            </span>
          </div>
        </div>
        <div class="font-bold text-2xl text-white ml-2 my-14">
          {{ movie.genre }}
        </div>
        <button
          class="bg-rose-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-3/6"
          @click="onViewMovie(movie.id)"
        >
          VIEW
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main_container_card {
  position: relative;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.rating {
  position: absolute;
  top: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.6);
}
.preview {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  height: 100%;
  width: 100%;
}
.main_container_card:hover .image {
  opacity: 0.3;
}

.main_container_card:hover .preview {
  opacity: 1;
}
</style>
