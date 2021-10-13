import Vue from 'vue';
import App from './App.vue';
import router from './router';

// store
import initStore from "./store/index";

// charts
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

Vue.use(Chartkick, { adapter: Chart });

// Templating and Styling
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

const store = initStore();
new Vue({
  router,
  render: h => h(App, {
    props: {
      store, 
    },
  })
}).$mount('#app');

