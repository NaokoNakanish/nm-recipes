// vuex のことを書くところ

import Vue from "vue";
import Vuex from "vuex";
import RecipeService from "@/services/RecipeService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
  },
  actions: {
    fetchRecipes({ commit }) {
      RecipeService.getRecipes()
        .then((response) => {
          commit("SET_RECIPES", response.data);
        })
        .catch((error) => {
          console.log("There was an error: " + error.response);
        });
    },
  },
  modules: {},
});
