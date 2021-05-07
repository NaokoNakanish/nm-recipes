// vuex のことを書くところ

import Vue from "vue";
import Vuex from "vuex";
import RecipeService from "@/services/RecipeService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    recipe: {},
  },
  mutations: {
    // 全部のレシピデータがさっと持ってくる・RecipeList.vueで利用
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    // 個別にレシピデータもってくる・RecipeDetail.vueで利用
    SET_RECIPE(state, recipe) {
      state.recipe = recipe;
    },
  },
  actions: {
    // 全部のレシピデータがさっと持ってくる・RecipeList.vueで利用
    fetchRecipes({ commit }) {
      RecipeService.getRecipes()
        .then((response) => {
          console.log("fetchRecipes()");
          commit("SET_RECIPES", response.data);
        })
        .catch((error) => {
          console.log("There was an error: " + error.response);
        });
    },
    // 個別にレシピデータもってくる・RecipeDetail.vueで利用
    fetchRecipe({ commit, getters }, id) {
      // send in the getters
      let recipe = getters.getRecipeById(id);
      console.log("via getters recipe", recipe);
      if (recipe) {
        commit("SET_RECIPE", recipe); // すでにrecipesが取得されている場合は、getters経由でrecipeのデータ取得
      } else {
        console.log("theres no recipes. lets get recipe from axios by id", id);
        RecipeService.getRecipe(id)
          .then((response) => {
            console.log("response.data", response.data);
            commit("SET_RECIPE", response.data);
          })
          .catch((error) => {
            console.log(
              "EventService.getRecipe does not work: " + error.response
            );
          });
      }
    },
  },
  getters: {
    getRecipeById: (state) => (id) => {
      return state.recipes.find((recipe) => recipe.id === id);
    },
  },
  modules: {},
});
