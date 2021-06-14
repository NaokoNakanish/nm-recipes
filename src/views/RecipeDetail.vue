<template>
  <div>
    <b-container>
      <span>#{{ recipe.id }}</span>
      <h1>{{ recipe.title }}</h1>
      <b-img :src="recipe.imgSrc" alt="no image registered" width="1000px" />

      <b-card style="width: 1000px">
        <template #header>
          <h2 class="mb-0">ingredient</h2>
        </template>
        <b-card-body>
          <b-list-group
            v-for="ingredient in recipe.ingredients"
            :key="ingredient"
          >
            <b-list-group-item>
              {{ ingredient.ingredient }} ....{{ ingredient.quantity }}
            </b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-card>

      <b-card style="width: 1000px">
        <template #header>
          <h2 class="mb-0">How to Make</h2>
        </template>
        <b-card-body>
          <b-list-group
            v-for="process in recipe.processes"
            :key="process.order"
          >
            <b-list-group-item> {{ process.do }}</b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-card>
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
