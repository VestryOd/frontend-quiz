import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Vuikit from "vuikit";
import VuikitIcons from "@vuikit/icons";
import hljs from 'highlight.js'
import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('v-icon', Icon)

import '@/assets/scss/app.scss';

Vue.config.productionTip = false;

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(hljs.vuePlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
