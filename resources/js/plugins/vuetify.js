import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#293F8A',
        secondary: '#ff7421',
        tooltip: '#212121'
      }
    }
  },
  icons: {
    iconfont: "mdi",
  }
});
