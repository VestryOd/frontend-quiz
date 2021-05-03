import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Vuikit from "vuikit";
import VuikitIcons from "@vuikit/icons";
import hljs from 'highlight.js'

Vue.config.productionTip = false;

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(hljs.vuePlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
