// Bootstrap使って書いてみよう
<template>
  <b-container fluid>
    <h1>Note New Recipe</h1>
    <b-form-group
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
      style="max-width: 1000px"
      @submit.prevent="createRecipe"
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
        id: {{ id }}
      </b-form-group>
      <b-form-group
        label="title:"
        label-for="title"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input v-model="title" id="title"></b-form-input>
      </b-form-group>
      title: {{ title }}

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
                  v-model="ingredients[n - 1].ingredient"
                  id="ingredients[n-1].ingredient"
                  col="8"
                ></b-form-input>
              </b-col>
              <b-col col lg="3">
                <label>quantity:</label>
                <b-form-input
                  v-model="ingredients[n - 1].quantity"
                  id="ingredient[n-1].quantity"
                  col="4"
                ></b-form-input>
              </b-col>
            </b-row>
          </ol>
        </b-form>
      </b-form-group>
      {{ ingredients }}
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
            v-model="processes[n - 1].process"
            id="processes[n-1].process"
          ></b-form-input>
        </ol>
      </b-form-group>
      {{ processes }}
    </b-form-group>
    <div>
      <b-button @click="addColProcess">+</b-button>
      <b-button @click="delColProcess">-</b-button>
    </div>
    <div>
      <b-form-file
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here"
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file1 ? file1.name : "" }}</div>
    </div>
    <input type="submit" value="submit" />
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
        {
          ingredient: "",
          quantity: "",
        },
        {
          ingredient: "",
          quantity: "",
        },
      ], // 仮置
      numOfIngredients: 5, // 仮置
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
      numOfProcesses: 3, // 仮置
      file1: "",
    };
  },
  methods: {
    addColIngredient() {
      this.numOfIngredients++;
      this.ingredients.push({ ingredient: "", quantity: "" });
    },
    delColIngredient() {
      this.numOfIngredients--;
      this.ingredients.pop();
    },
    addColProcess() {
      this.numOfProcesses++;
      this.processes.push({ process: "" });
    },
    delColProcess() {
      this.numOfProcesses--;
      this.processes.pop();
    },
    createRecipe() {
      this.$store.dispatch("createRecipe", this.event);
    },
  },
};
</script>
