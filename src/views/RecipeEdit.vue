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
        label="id:"
        label-for="id"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-row>
          <b-col lg="1">
            <b-form-input v-model="id" id="id"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group
        label="title:"
        label-for="title"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input v-model="title" id="title"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Ingredients:"
        label-for="ingredients"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form inline>
          <ol v-for="n in numOfIngredients" :key="n">
            <b-row>
              <b-col col lg="9">
                <label>ingredient:</label>
                <b-form-input
                  id="ingredient[n].ingredient"
                  col="8"
                ></b-form-input>
              </b-col>
              <b-col col lg="3">
                <label>quantity:</label>
                <b-form-input
                  id="ingredient[n].quantity"
                  col="4"
                ></b-form-input>
              </b-col>
            </b-row>
          </ol>
          s
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
    <div>
      <b-form-file
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here"
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file1 ? file1.name : "" }}</div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      title: "",
      ingredients: [
        {
          ingredient: "",
          quantity: "",
        },
        {
          ingredient: "",
          quantity: "",
        },
        {
          ingredient: "",
          quantity: "",
        },
      ], // 仮置
      numOfIngredients: 3, // 仮置
      processes: [
        {
          process: "",
        },
        {
          process: "",
        },
        {
          process: "",
        },
      ], // 仮置
      file1: "",
    };
  },
};
</script>
