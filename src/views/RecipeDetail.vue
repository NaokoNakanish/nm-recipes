<template>
  <div>
    <b-container fluid>
      <h1>#{{ recipe.id }} {{ recipe.title }}</h1>
      <img src="@/assets/PXL_20210327_051520012.jpg" alt="curry photo" />

      <h2>ingredient🍅</h2>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient">
          {{ ingredient.ingredient }} ....{{ ingredient.quantity }}
        </li>
      </ul>
      <h2>How to Make🍳</h2>
      <ol>
        <li v-for="process in recipe.processes" :key="process.order">
          {{ process.do }}
        </li>
      </ol>
    </b-container>
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

<style scoped></style>
