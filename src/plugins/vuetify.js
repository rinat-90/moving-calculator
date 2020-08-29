import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#eebb4d',
        secondary: '#fdfffc',
        accent: '#a15200',
        error: '#d90429',
      },
    },
  },
});
