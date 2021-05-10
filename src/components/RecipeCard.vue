<template>
  <section class="recipe-card">
    <!-- <div class="cotainer"></div> -->
    <span class="recipe-photo">
      <img src="PXL_20210327_051520012.jpg" alt="curry photo" />
    </span>
    <span class="recipe-info">
      <h2>{{ recipe.title }}</h2>
      <p>Updated: {{ recipe.editDate }} by {{ recipe.editor }}</p>
      <router-link :to="{ name: 'RecipeDetail', params: { id: recipe.id } }"
        >>See detail</router-link
      >
    </span>
  </section>
</template>

<script>
export default {
  props: ["recipe"],
};
</script>

<style scoped>
.recipe-card {
  /* 枠 */
  height: 250px;
  /* padding: 0.5em; */
  margin-bottom: 1em;
  transition: all 0.2s linear;
  cursor: pointer;
  /* 文字配置 */
  text-align: left;
}
.recipe-info {
  height: 250px;
  width: 400px;
}
.recipe-photo {
  border-radius: 3px;
  padding: 5px;
  height: 250px;
  width: 500px;
  float: left;
}
img {
  height: 250px;
  float: center;
}
</style>
