<template>
  <div>
    <router-link :to="{ name: 'RecipeDetail', params: { id: recipe.id } }">
      <b-card
        overlay
        style="max-width: 550px"
        img-src="https://lh3.googleusercontent.com/x82Pvj76m0CUtneTMrhDkFMirrnjiMPUUc1qmYDn8b2fbsKDyJJNU_K4qWjeUeXWMyiQoBB93L7uK-MxhspsEHUzlIraKdu38mlwsFby77B5SCcL_jZxuxWJsRS7EUC06tee7i3xCag2S3hqBfkjQquAeHBcQoWDjqJV3qERRs6Wrx_H_4BvYLgMv0miRhzkdAIoc-lEmqPYahGvBnIfBCrmf59-WRRqaiwZHcM9tGLd6AWqXqRA8V8ev8DKM5i8GSM9VHHLZnApq8M1D3nKYbQvHSbBhZEh_QmXB2ScDA8XcduJy4QO2lFiupGhn9m2sFxCXnGS9gPAy2VTpNsLhykKaK-drTbDMe_Lr4ZgsTSbhWqgGzayoxz7T3xrhOLv8LolIAtTZxloKWvMuDrDL1gLKxIdTXxT5xp_h8jgqdIMREE82VeMUo_MXqUqBdVE5Q1D6Wr6wsGUi6ogBfM2dkLGBkiGqg6x0S2lv_ZsZikQwZXiTMZpHt-N-M387GiaDX1Uw_QEBecZ2M7MkYQj0okxhMdfaRKPkik4YBkO1hdyIj7nDXOcCXFv60hTM0A6Q4lsGU-zIXDFGG59KjvM4YkZ0CT5Psq_J15PjlmPkp0yj6-vKjLSCAhopozMC19q8SwWjROTXqEYYdVsueDZjoG55bFJmILzkpyG4CaiXKp_8t36_qtE06JZLdNR-Sx-GpsrpW4ruF0xUR0OMLTS-tZMuQ=w1708-h962-no?authuser=0"
        img-alt="no image"
        img-width="550px"
        text-variant="white"
      >
        <b-card-text
          >{{ recipe.title }} / {{ recipe.category }} / Updated:
          {{ recipe.editDate }} by
          {{ recipe.editor }}
        </b-card-text>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
};
</script>

<style scoped>
.recipe-card {
  /* レシピカード１枚分のエリアの設定 */
  height: 250px;
  width: 800px;
  display: flex;
  flex-wrap: nowrap;
  /* padding: 0.5em; */
  margin-bottom: 1em;
  transition: all 0.2s linear;
  cursor: pointer;
  /* 文字配置 */
  text-align: left;
}
.recipe-info {
  /* 文字表示エリアの設定 */
  height: 250px;
  width: 400px;
  margin-block: 1em;
}
.recipe-photo {
  /* 写真表示エリアの設定 */
  border-radius: 3px;
  padding: 5px;
  height: 250px;
  width: 470px;
  float: left;
}
.recipe-category {
  /* カテゴリエリアの設定 */
  height: 20px;
  width: 70px;
  margin-block: 1em;
  border-radius: 3px;
  font-size: 15px;
  text-align: center;
  background-color: #49a994;
  color: white;
}
</style>
