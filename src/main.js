import Vue from 'vue';
import App from './App';
import VueAvatar from './components/VueAvatar';
import VueAvatarScale from './components/VueAvatarScale';

Vue.config.productionTip = false;

Vue.component('vue-avatar', VueAvatar);
Vue.component('vue-avatar-scale', VueAvatarScale);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
});

export { VueAvatar, VueAvatarScale };
