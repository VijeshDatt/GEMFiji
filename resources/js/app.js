// Base imports
import Vue from 'vue';
import router from './router';
import vuetify from './plugins/vuetify';
import App from './components/App';
import VueMasonry from 'vue-masonry-css';
import dayjs from 'dayjs';
import VueMask from 'v-mask';

// Mixin
import { generic } from './mixins/generic';

require('./bootstrap');

Vue.use(VueMasonry);
Vue.use(dayjs);
Vue.use(VueMask);
Vue.mixin(generic);

new Vue({
  router,
  vuetify,
  // store,
  render: h => h(App)
}).$mount("#app");
