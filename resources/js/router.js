import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';

Vue.use(Router);

const routes = [
    {
        path : '/',
        name : 'welcome',
        component : Welcome

    },
    {
        path : '/catagory',
        name : 'catagory',
        component: () => import('./views/Catagory.vue')
    }
];


const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;
