import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ff9f1c',
        secondary: '#fdfffc',
        accent: '#4361ee',
        error: '#d90429',
      },
    },
  },
});
