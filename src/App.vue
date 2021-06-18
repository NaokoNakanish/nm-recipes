<template>
  <div>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />

        <title>nm-recipes</title>

        <!-- Required Stylesheets -->
        <!-- <link
          type="text/css"
          rel="stylesheet"
          href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"
        /> -->
      </head>

      <body>
        <div id="app">
          <b-container fluid>
            <!-- Navigation Bar -->
            <div>
              <b-navbar>
                <b-navbar-brand>
                  <router-link :to="{ name: 'RecipeList' }"
                    >nm recipes
                  </router-link></b-navbar-brand
                >
                <div v-for="(button, index) in buttons" :key="index">
                  <b-button class="mr-1" size="sm" variant="primary">
                    {{ button.caption }}
                  </b-button>
                </div>
                <router-link
                  :to="{ name: 'RecipeEdit' }"
                  position="fixed"
                  right="50px"
                  bottom="50px"
                >
                  <b-button variant="outline-primary">
                    ADD NEW RECIPE
                  </b-button>
                </router-link>
              </b-navbar>
            </div>
            <!-- Render Every View -->
            <div>
              <router-view />
            </div>
          </b-container>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        // categories
        { caption: "Japanese", state: false },
        { caption: "Chinese", state: false },
        { caption: "Italian", state: false },
        { caption: "French", state: false },
        { caption: "Indian", state: false },
        { caption: "Sweets", state: false },
        { caption: "Breads", state: false },
      ],
    };
  },
};
</script>

<!--ここじゃない？ -->
<!-- Import Noto Sans JP Light 300, Bold 700 from Google fonts -->
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;700&display=swap");

/* link */
a:visited {
  color: #06231c;
}
a:hover {
  color: #49a994;
}
/* 見出し文字 */
h1 {
  font-size: 3em;
  font-family: "Noto Sans JP", sans-serif;
  color: #49a994;
}
h2 {
  font-size: 1.7em;
  font-family: "Noto Sans JP", sans-serif;
  color: #49a994;
}
</style>
