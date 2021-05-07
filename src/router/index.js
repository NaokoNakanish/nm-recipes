import Vue from "vue";
import Router from "vue-router";
// import Home from "../views/Home.vue";
import RecipeList from "../views/RecipeList.vue";
import RecipeDetail from "../views/RecipeDetail.vue";
import RecipeEdit from "../views/RecipeEdit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "RecipeList",
      component: RecipeList,
    },
    {
      path: "/recipeedit/",
      name: "RecipeEdit",
      component: RecipeEdit,
    },
    {
      path: "/recipedetail/:id", // idごとにページわけ
      name: "RecipeDetail",
      component: RecipeDetail,
      props: true, // データセット⇔RecipeDetailページ間で、idをやりとりしたい
    },
  ],
});
