<template>
  <div id="app">
    <div id="nav"></div>
    <router-link :to="{ name: 'RecipeList' }">List</router-link> |
    <router-link :to="{ name: 'RecipeEdit' }">Edit</router-link>
    <router-view />
  </div>
</template>

<style></style>
