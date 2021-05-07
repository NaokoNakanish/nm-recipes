// axiosでdb.jsonを読み込むためのコードたち

import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  // 全部のレシピデータがさっと持ってくる・RecipeList.vueで利用
  getRecipes() {
    return apiClient.get("/recipes");
  },
  // 個別にレシピデータもってくる・RecipeDetail.vueで利用
  getRecipe(id) {
    // idごとに単体で受け取れると便利なので、データセットには基本idを振りましょうね
    return apiClient.get("/recipes/" + id);
  },
};
