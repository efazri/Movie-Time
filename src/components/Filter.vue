<template>
  <div class="bg-slate-900 rounded-lg h-100">
    <div class="border-b-2 p-4 border-slate-800">
      <p class="text-white font-bold text-left">Sort Result By</p>
    </div>
    <div class="border-b-2 p-4 border-slate-800">
      <select
        id="popularity"
        :v-model="popularity"
        @change="onChangePopularity"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected disabled>Popularity</option>
        <option
          :selected="popularity === item"
          v-for="(item, i) in options"
          :key="i"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
    </div>
    <div class="border-b-2 p-4 border-slate-800">
      <p class="text-white font-bold text-left">Genres</p>
    </div>
    <div class="p-4">
      <Checkbox
        v-for="(genre, i) in genres"
        :key="i"
        :value="genre"
        :selected="selectedGenre"
        @onChangeHandler="onChange"
      />
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
export default {
  name: "filter-component",
  props: ["popularity", "selectedGenre"],
  components: {
    Checkbox,
  },
  data() {
    return {
      genres: [
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
      options: [
        "Popularity Ascending",
        "Popularity Descending",
        "Rating Ascending",
        "Rating Descending",
      ],
    };
  },
  methods: {
    onChange(val) {
      this.$emit("onChangeGenre", val);
    },
    onChangePopularity(event) {
      const val = event.target.value;
      this.$emit("onChangePopularity", val);
    },
  },
};
</script>
