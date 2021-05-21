<template>
  <div id="app">
    <b-container fluid>
      <!-- Navigation Bar -->
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <!-- <b-navbar-brand>nm recipes</b-navbar-brand> -->
          <b-nav>
            <b-nav-item>
              <router-link :to="{ name: 'RecipeList' }">List</router-link>
            </b-nav-item>
            |
            <b-nav-item>
              <router-link :to="{ name: 'RecipeEdit' }">Edit</router-link>
            </b-nav-item>
          </b-nav>
        </b-navbar>
      </div>
      <!-- Render Every View -->
      <div>
        <router-view />
      </div>
    </b-container>
  </div>
</template>

<style lang="scss">
// Import Noto Sans JP Regular 400 from Google fonts
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");

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
// .b-nav {
//   font-size: 1em;
//   color: #1d7c67;
//   text-decoration: none;
// }
img {
  /* 写真そのもののサイズ、配置の設定 */
  height: 250px;
  float: center;
}
</style>
