import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#000',
        primaryBtn: '#0495d6',
        secondary: "#fff"
      },
      dark: {
        primary: '#636363',
        primaryBtn: '#0495d6',
        secondary: '#fff'
      },
    },
  },
  icons: {
    iconfont: 'md' || 'fa'
}
});