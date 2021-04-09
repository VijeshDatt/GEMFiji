import Vue from 'vue';
import router from './router';
import vuetify from './plugins/vuetify';
import App from './components/App';
import VueMasonry from 'vue-masonry-css';

require('./bootstrap');

Vue.use(VueMasonry);

new Vue({
  router,
  vuetify,
  // store,
  render: h => h(App)
}).$mount("#app");
