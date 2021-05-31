<template>
  <div>
    <router-link :to="{ name: 'RecipeDetail', params: { id: recipe.id } }">
      <b-card
        overlay
        style="max-width: 500px"
        :img-src="recipe.imgSrc"
        img-alt="no image"
        img-width="500px"
        text-variant="white"
      >
        <b-card-body>
          <b-card-title>{{ recipe.title }}</b-card-title>
          <b-card-subtile>{{ recipe.category }}</b-card-subtile>
          <b-card-text
            >Updated: {{ recipe.editDate }} by {{ recipe.editor }}
          </b-card-text>
        </b-card-body>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
};
</script>

<style scoped>
.recipe-card {
  /* レシピカード１枚分のエリアの設定 */
  height: 250px;
  width: 800px;
  display: flex;
  flex-wrap: nowrap;
  /* padding: 0.5em; */
  margin-bottom: 1em;
  transition: all 0.2s linear;
  cursor: pointer;
  /* 文字配置 */
  text-align: left;
}
.recipe-info {
  /* 文字表示エリアの設定 */
  height: 250px;
  width: 400px;
  margin-block: 1em;
}
.recipe-photo {
  /* 写真表示エリアの設定 */
  border-radius: 3px;
  padding: 5px;
  height: 250px;
  width: 470px;
  float: left;
}
.recipe-category {
  /* カテゴリエリアの設定 */
  height: 20px;
  width: 70px;
  margin-block: 1em;
  border-radius: 3px;
  font-size: 15px;
  text-align: center;
  background-color: #49a994;
  color: white;
}
</style>
