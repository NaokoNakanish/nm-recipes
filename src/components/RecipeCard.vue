<template>
  <div class="recipe-card">
    <img
      class="dish-photo"
      src="PXL_20210327_051520012.jpg"
      alt="curry photo"
    />
    <h2>{{ recipe.title }}</h2>
    <p>Updated: {{ recipe.editDate }} by {{ recipe.editor }}</p>
    <router-link :to="{ name: 'RecipeDetail', params: { id: recipe.id } }"
      >>See detail</router-link
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
  padding: 0.5em;
  margin-bottom: 1em;
  transition: all 0.2s linear;
  cursor: pointer;
  /* 文字配置 */
  text-align: left;
}
.dish-photo {
  border-radius: 10px;
  height: 300px;
  padding: 5px;
  float: left;
}
</style>
