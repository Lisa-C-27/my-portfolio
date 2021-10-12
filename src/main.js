import { createApp } from 'vue';
import 'normalize.css';
import App from './App.vue';
import { ObserveVisibility } from 'vue-observe-visibility';
import VueScreen from 'vue-screen';

import router from './router.js';
import store from './store/index.js';

import BaseButton from './layout/BaseButton.vue';
import BaseCard from './layout/BaseCard.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueScreen);
app.directive('observe-visibility', {
  beforeMount: (el, binding, vnode) => {
    vnode.context = binding.instance;
    ObserveVisibility.bind(el, binding, vnode);
  },
  update: ObserveVisibility.update,
  unmounted: ObserveVisibility.unbind,
});

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app')
