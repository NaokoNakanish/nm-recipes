<template>
  <div>
    <h1>RecipeDetail #{{ recipe.id }}</h1>
    <h2>ingredients</h2>
    <ul>
      <li v-for="ingredient in recipe.ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
    <h2>How to Make</h2>
    <ol>
      <li v-for="process in recipe.processes" :key="process.order">
        {{ process.do }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id"], // dispatchのときにidがpayloadとして必要になる
  created() {
    this.$store.dispatch("fetchRecipe", this.id); // db.jsonのデータをrecipeへ格納させるアクションを呼び出す
  },
  computed: { ...mapState(["recipe"]) },
};
</script>
