<template>
  <b-container fluid>
    <div class="page-title">
      <!-- <h1>nm recipes</h1> -->
    </div>
    <div class="recipe-list">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </b-container>
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

<style scoped>
.page-title {
  width: 100%;
}
/* flexboxを有効に */
.recipe-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
