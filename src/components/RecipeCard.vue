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
          <b-card-subtile>{{ recipe.category }}</b-card-subtile>
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
        return "https://lh3.googleusercontent.com/sFCWCeIXLyRWpc8TepilggZWqLAYOoHzAPUnHCRdLjRdsQrS37ih0t5R2eMKvQxlxOSVasLRmNY3zisQutLWANMErjSBMp9Avh8pEHWGYMV-9RwaBLae06sfyOEqzpG-7uGz2M0wDTUlDhom6z-qwlgST2UVjfptjSO0QVMpmdsyYgbTeFv4-lOaXZOI58EEmGw0qleQXCDL6kKI2FDQ1214OviUWED-iLuE-ylsfBR1_TdnecKalwly0_mchbwr_-iYxDPGDzMaYakdCb6Al3LdYpaFo57jycDrsjCRJTjFcFc9tDZuLLjfoVFhVxmuFwM2q9dze3X2h7P9DTjr_cHC5uq29u8I4_e61x6j_aLwV3lO33j1p4DLDQ8oVczj2iIIJOzSWvXgHK0wDCSjUAvOf8kWJjIVXdwR98Cnx62C_kumiZVhHhDFbnM4USQHQJnWcP3r4Yy7AZrpe9BiLwMEd7pzpKbj66vmOWhGxYS744gPOKIPgjVnLaq7u97K6uTJ6mMuhyxHFWvjorWzIJfzXbwXFornEr4jdkepTOLEvsUp6WOqIl9KayFToIGeBW8nlmSrwzw1Wi47APdE-gEtc4lEzMI9MVO9Q-ALjhl0RUgO2fScd2-zXsh06bo-x5cFZN5Ss4lv0wvtgwn5mEuJUhZrOUxo6DKArhTlUk5SPOZ_b7_HKOxEcqNuLFVh2rY1NPVSPlEVbS-gG-ZJoqXNPA=w1704-h960-no?authuser=0";
      }
    },
  },
};
</script>

<style scoped></style>
