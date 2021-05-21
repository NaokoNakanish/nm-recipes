// Bootstrap使って書いてみよう
<template>
  <b-container fluid>
    <h1>Note New Recipe</h1>
    <b-form-group
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
      style="max-width: 1000px"
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
        label="Ingredients:"
        label-for="ingredients"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form inline>
          <ol v-for="ingredient in ingredients" :key="ingredient.id">
            <label>ingredients:</label>
            <b-form-input id="ingredients"></b-form-input>
            <label class="quantity" for="ingredients-quantity">quantity:</label>
            <b-form-input id="quantity"></b-form-input>
          </ol>
        </b-form>
      </b-form-group>
      <b-form-group
        label="process:"
        label-for="process"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <ol v-for="process in processes" :key="process.id">
          <label>{{ process.id }}</label>
          <b-form-input id="process"></b-form-input>
        </ol>
      </b-form-group>
    </b-form-group>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      types: ["id", "title"],
      ingredients: 3, // 仮置
      processes: 3, // 仮置
    };
  },
};
</script>
