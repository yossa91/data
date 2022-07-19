
import home from '../views/home-page.vue';

export const routes = [
    {
        path : '/',
        name : 'home',
        component : home
    },{ 
        path : '/list',
        name : 'list',
        component : () => import('../views/list-page.vue')
    }
]


export default routes