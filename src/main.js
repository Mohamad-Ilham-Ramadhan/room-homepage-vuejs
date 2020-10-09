import Vue from "vue";
import Fragment from "vue-fragment";
import VueWindowSize from "vue-window-size";
import App from "./App.vue";
// import "./assets/scss/bootstrap-prep.scss";
import "./assets/scss/fonts.scss";

Vue.use(Fragment.Plugin);
Vue.use(VueWindowSize);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
