// Bootstrap使って書いてみよう
<template>
  <b-container fluid>
    <h1>Note New Recipe</h1>
    <b-form @submit.prevent="createRecipe">
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
          <b-form-input v-model="recipe.title" id="title"></b-form-input>
        </b-form-group>
        title: {{ recipe.title }}

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
                    v-model="recipe.ingredients[n - 1].ingredient"
                    id="ingredients[n-1].ingredient"
                    col="8"
                  ></b-form-input>
                </b-col>
                <b-col col lg="3">
                  <label>quantity:</label>
                  <b-form-input
                    v-model="recipe.ingredients[n - 1].quantity"
                    id="ingredient[n-1].quantity"
                    col="4"
                  ></b-form-input>
                </b-col>
              </b-row>
            </ol>
          </b-form>
        </b-form-group>
        {{ recipe.ingredients }}
        <div>
          <b-button @click="addColIngredient">+</b-button>
          <b-button @click="delColIngredient">-</b-button>
        </div>
        <b-form-group
          label="process:"
          label-for="process"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <ol v-for="n in numOfProcesses" :key="n">
            <label>{{ n }}</label>
            <b-form-input
              v-model="recipe.processes[n - 1].process"
              id="processes[n-1].process"
            ></b-form-input>
          </ol>
        </b-form-group>
        {{ recipe.processes }}
        <div>
          <b-button @click="addColProcess">+</b-button>
          <b-button @click="delColProcess">-</b-button>
        </div>
        <div>
          <b-form-file
            :state="Boolean(recipe.file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here"
          ></b-form-file>
          <div class="mt-3">
            Selected file: {{ recipe.file1 ? recipe.file1.name : "" }}
          </div>
        </div>
        <b-button type="submit">submit</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      recipe: this.createFreshRecipe(),
      numOfIngredients: 5, // 仮置
      numOfProcesses: 3, // 仮置
    };
  },
  methods: {
    createFreshRecipe() {
      const id = this.$store.state.recipes.length;
      return {
        id: id,
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
          {
            ingredient: "",
            quantity: "",
          },
          {
            ingredient: "",
            quantity: "",
          },
        ], // 仮置
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
    addColIngredient() {
      this.numOfIngredients++;
      this.recipe.ingredients.push({ ingredient: "", quantity: "" });
    },
    delColIngredient() {
      this.numOfIngredients--;
      this.recipe.ingredients.pop();
    },
    addColProcess() {
      this.numOfProcesses++;
      this.recipe.processes.push({ process: "" });
    },
    delColProcess() {
      this.numOfProcesses--;
      this.recipe.processes.pop();
    },
    createRecipe() {
      this.$store.dispatch("createRecipe", this.recipe);
    },
  },
};
</script>
