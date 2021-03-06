import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// import Buefy from "buefy";
// import "buefy/dist/buefy.css";

import Notifications from "vue-notification";

Vue.use(Notifications);

process.on('unhandledRejection', (error) => {
  console.error(error)
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
