import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AOS from "aos"
import "../node_modules/aos/dist/aos.css"
import "@/plugins/bootstrap";
import "@/plugins/animate";
import "@/assets/style/style.scss";

Vue.config.productionTip = false;

AOS.init()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
