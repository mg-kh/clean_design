import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
// import "./registerServiceWorker";
import Scrollspy from "vue2-scrollspy";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "@/plugins/bootstrap";
import "@/plugins/animate";
import "@/assets/style/style.scss";

Vue.config.productionTip = false;

Vue.use(VueMeta);
AOS.init();
Vue.use(Scrollspy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
