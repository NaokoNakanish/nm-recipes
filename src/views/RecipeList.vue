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
  created() {
    this.$store.dispatch("fetchRecipes"); // データ持ってくる
  },
  computed: mapState(["recipes"]),
};
</script>
