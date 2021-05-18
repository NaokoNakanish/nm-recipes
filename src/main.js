import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// bootstrapじゅんび //
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import "./app.scss";

Vue.config.productionTip = false;

// vuex default setting
new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

// bootstrap使う宣言 //
Vue.use(BootstrapVue);
