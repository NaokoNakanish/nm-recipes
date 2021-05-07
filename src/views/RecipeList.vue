<template>
  <div>
    <h1>RecipeList</h1>
    <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    RecipeCard,
  },
  computed: { ...mapState(["recipes"]) },
  created() {
    this.$store.dispatch("fetchRecipes"); // db.jsonのデータをrecipesへ格納させるアクションを呼び出す
  },
};
</script>
