import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// bootstrapじゅんび //
import BootstrapVue from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// SCSS追加
import "./custom.scss";

import {
  LayoutPlugin,
  NavPlugin,
  NavbarPlugin,
  FormGroupPlugin,
  CardPlugin,
} from "bootstrap-vue"; // Import Bootstrap Plugins

Vue.config.productionTip = false;

// bootstrap使う宣言 new Vue...の前に入れる、order is important...//
Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
Vue.use(NavPlugin);
Vue.use(NavbarPlugin);
Vue.use(FormGroupPlugin);
Vue.use(CardPlugin);

// vuex default setting
new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
