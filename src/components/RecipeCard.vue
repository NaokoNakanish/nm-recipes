<template>
  <div class="recipe-card">
    <h1>{{ recipe.title }}</h1>
    <p>Updated: {{ recipe.editDate }} by {{ recipe.editor }}</p>
    <router-link :to="{ name: 'RecipeDetail', params: { id: recipe.id } }"
      >See detail</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["recipe"],
};
</script>

<style scoped>
.recipe-card {
  /* 枠 */
  padding: 50px;
  margin-bottom: 24px;
  border: 1px dotted #333333;
  transition: all 0.2s linear;
  cursor: pointer;
  /* 文字配置 */
  text-align: left;
}
</style>
