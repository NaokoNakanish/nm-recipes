import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// bootstrapじゅんび //
import BootstrapVue from "bootstrap-vue";
import {
  LayoutPlugin,
  NavPlugin,
  NavbarPlugin,
  FormGroupPlugin,
} from "bootstrap-vue"; // Import Bootstrap Plugins
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// SCSS追加
import "./app.scss";

Vue.config.productionTip = false;

// bootstrap使う宣言 //
Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
Vue.use(NavPlugin);
Vue.use(NavbarPlugin);
Vue.use(FormGroupPlugin);

// vuex default setting
new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

// 使いたいコンポーネント宣言
// Vue.component("b-navbar", BNavbar);
// Vue.component("b-form-group", BFormGroup);
