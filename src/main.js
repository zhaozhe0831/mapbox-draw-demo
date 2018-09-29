import Vue from 'vue';
import iView from 'iview';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'iview/dist/styles/iview.css';

import App from './App.vue';
import router from './router';
import store from './store';


mapboxgl.accessToken = 'pk.eyJ1IjoicGV0ZXJxbGl1IiwiYSI6ImpvZmV0UEEifQ._D4bRmVcGfJvo1wjuOpA1g';

Vue.config.productionTip = false;

Vue.use(iView);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
