<template>
  <div>
    <div class="nav">
      <router-link :to="{ name: 'RecipeList' }">List</router-link> |
      <router-link :to="{ name: 'RecipeEdit' }">Edit</router-link>
    </div>
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  font-family: "Verdana";
  font-size: 100%;
  color: #06231c;
  margin-left: 10%;
  margin-right: 10%;
  text-decoration: none;
}
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
  color: #49a994;
}
h2 {
  font-size: 1.7em;
  color: #49a994;
}
.nav {
  font-size: 1em;
  color: #1d7c67;
  text-decoration: none;
}
</style>
