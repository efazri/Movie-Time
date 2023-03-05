import { createStore } from "vuex";
import { movieList } from "@/assets/fakeDb/movieList";

export default createStore({
  state: {
    moviesData: [],
    moviesList: movieList,
    genreList: [],
    options: [
      "Popularity Ascending",
      "Popularity Descending",
      "Rating Ascending",
      "Rating Descending",
    ],
    optionsReleaseData: ["Release Date Ascending", "Release Date Descending"],
  },
  mutations: {
    setMoviesData(state, payload) {
      state.moviesData = payload;
    },
    setMoviesList(state, payload) {
      state.moviesList = payload;
    },
    setGenreList(state, payload) {
      state.genreList = payload;
    },
  },
  actions: {
    onFilterByGenre({ commit }, payload) {
      const { genre, sliceEnd, category } = payload;
      const filteredMovies = movieList.filter(
        (el) => el.genre.toLocaleLowerCase() === genre.toLocaleLowerCase()
      );

      let newDataMovies = filteredMovies.filter(
        (el, i) =>
          i < sliceEnd &&
          el.type.toLocaleLowerCase() === category.toLocaleLowerCase()
      );
      let newMovieList = filteredMovies.filter(
        (el) => el.type.toLocaleLowerCase() === category.toLocaleLowerCase()
      );
      console.log({ newDataMovies, newMovieList });
      commit("setMoviesData", newDataMovies);
      commit("setMoviesList", newMovieList);
    },
    onFilterByPopularity({ state, commit }, payload) {
      const { type, order, endSlice, category } = payload;
      console.log({ payload });
      let newData;
      if (order === "DESC") {
        newData = state.moviesList.sort(
          (a, b) => Number(b[type]) - Number(a[type])
        );
      } else {
        newData = state.moviesList.sort(
          (a, b) => Number(a[type]) - Number(b[type])
        );
      }

      let newDataMovies = [];
      let newMovieList = newData;

      if (category) {
        newDataMovies = newData.filter(
          (el, i) =>
            i < +endSlice && el.type.toLowerCase() === category.toLowerCase()
        );
        newMovieList = newData.filter(
          (el) => el.type.toLowerCase() === category.toLowerCase()
        );
      } else {
        newDataMovies = newData.filter((el, i) => i < +endSlice);
      }

      console.log(newDataMovies, newMovieList);

      commit("setMoviesData", newDataMovies);
      commit("setMoviesList", newMovieList);
    },
    onResetData({ commit }, payload) {
      const { category, sliceEnd } = payload;

      const newMoviesData = movieList.filter(
        (el) => el.type.toLocaleLowerCase() === category.toLocaleLowerCase()
      );
      const newMoviesList = movieList.filter(
        (el, i) =>
          i < +sliceEnd &&
          el.type.toLocaleLowerCase() === category.toLocaleLowerCase()
      );

      commit("setMoviesData", newMoviesData);
      commit("setMoviesList", newMoviesList);
    },
  },
});
