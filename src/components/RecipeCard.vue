<template>
  <div>
    <router-link :to="{ name: 'RecipeDetail', params: { id: recipe.id } }">
      <b-card
        overlay
        style="max-width: 500px"
        :img-src="recipeImg"
        img-alt="photo load error"
        img-width="500px"
        text-variant="white"
      >
        <b-card-body>
          <b-card-title>{{ recipe.title }}</b-card-title>
          <b-card-subtitle>{{ recipe.category }}</b-card-subtitle>
          <b-card-text
            >Updated: {{ recipe.editDate }} by {{ recipe.editor }}
          </b-card-text>
        </b-card-body>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
  computed: {
    recipeImg() {
      // 写真がある場合はその写真を、ない場合は代替写真を表示させる
      if (this.recipe.imgSrc) {
        return this.recipe.imgSrc;
      } else {
        return "https://lh3.googleusercontent.com/jXPK7GuDv7cKCrfWvR6mS5WYUcOValNWo_Zcga7wGNRVE9stWM2JQC3HcsvfCQEfUhIoqn772MOQ7_EsWFGE8KSS7yBty7zrfz0o8kK09RrSGBGJtsnSZDTmDkX_SU5hCI2XYqU6QX1i5G36mm8aLCyjA-18cw_XJgeUPRJ_BgqJXtIjFx955J2KZRxv5ByohfYvlXao_bic-WqQa2I99JE2zVoAekKPYKtLXk6bxfyGVwHwqhpDPe1b3HcuT11CY2Wi-C8u0Rwkrc2Czsi6RjZqIZAck81TR0LzHJ65lMqL0OWiYJQbGNj2Mt7IoCoG_mIaOXul-FsXhlEhR3BeMDWCdE5JZaFd4QNa8siOx37G7fX5mYBBoWmNKzyKgYyh1rF3WomTe-kiFwpx3YDtYx-UG2CWDs5lPufmEMzDj-EqacVO7XlEss1U0JCCzZtDtaLi_O71XYMdTYmrW49TPYGqKnMWD1NphLibpDWsu--fRrthV5SG7psUnRbmzaqhPBuzH4UTf4G1Iu7QzQL7OySM9AtAemND12d4z-mLfnq0R6WAbS4DurwE_S-Ccqz4sQ09z0YPNdiQAeiPFyCrkawj5pK9trP0Ev_qea05CVGUBi0fMqV9GGcD3VOwM9HLhr9UKqSWG2bA6RYBExamxZd4tjKloS0BZlpvmkHYK2qUZSRUSx6RPe3dcp60Lc-2OgEAKiYSRKW7eS_6PGh2nT2BEw=w1698-h956-no?authuser=0";
      }
    },
  },
};
</script>

<style scoped></style>
