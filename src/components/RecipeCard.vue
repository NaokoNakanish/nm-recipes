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

<style scoped></style>
