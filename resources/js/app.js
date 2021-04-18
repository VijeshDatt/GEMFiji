// Base imports
import Vue from 'vue';
import router from './router';
import vuetify from './plugins/vuetify';
import App from './components/App';
import VueMasonry from 'vue-masonry-css';
import dayjs from 'dayjs';

// Mixin
import { generic } from './mixins/generic';

require('./bootstrap');

Vue.use(VueMasonry);
Vue.use(dayjs);
Vue.mixin(generic);

new Vue({
  router,
  vuetify,
  // store,
  render: h => h(App)
}).$mount("#app");
