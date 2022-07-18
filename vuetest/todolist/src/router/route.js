/*
import Vue from 'vue';
import Router from 'vue-router';
import home from '../views/home-page.vue';


Vue.use(Router);

export default new Router({
    mode : 'history',
    base : process.env.BASE_URL,
    routes : [
        {
            path : '/' ,
            name :  'home',
            component :  home  //impor 값 주소 없을 때는 () => import('원하는 경로 ex)'../views/list.vue'라는 식')
        },{
            path : '/list' ,
            name :  'list',
            component :  () => import('../views/list-page.vue')  //온로드가 아니기때문에 불러올 때 로드된다 (죠금 빠름)
        }
    ]
});
*/