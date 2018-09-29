import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: {
                name: 'demo'
            }
        },
        {
            path: '/demo',
            name: 'demo',
            component: () => import(/* webpackChunkName: "map-demo" */ '@/views/demo/index.vue')
        }
    ]
});
