import Vue from "vue";
import Fragment from "vue-fragment";
import App from "./App.vue";
import "./assets/scss/bootstrap-prep.scss";
import "./assets/scss/fonts.scss";

Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
