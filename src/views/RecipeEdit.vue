// Bootstrap使って書いてみよう
<template>
  <b-container>
    <h1>RecipeEdit</h1>
    <b-form-group
      label-cols-lg="3"
      label="Register New Recipes"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label="title:"
        label-for="title"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="title"></b-form-input>
      </b-form-group>
      <b-form-group
        label="id:"
        label-for="id"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="id"></b-form-input>
      </b-form-group>
      <b-form-group
        label="ingredients:"
        label-for="ingredients"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="ingredients"></b-form-input>
      </b-form-group>
    </b-form-group>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      types: ["id", "title"],
    };
  },
};
</script>
