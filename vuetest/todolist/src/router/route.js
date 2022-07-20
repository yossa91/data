
import home from '../views/home-page.vue';
//import는 바로렌더링 되므로 하나만..., const 정의 후에 불러오기 혹은 componenet 로 바로  3가지 방법으로 페이지 로드 가능

const table = () => {
    return import('../views/table-page.vue')
}

export const routes = [
    {
        path : '/', 
        redirect : '/home',
    },{
        path : '/home', 
        name : 'home',
        component : home
    },{ 
        path : '/list',
        name : 'list',
        component : () => import('../views/list-page.vue')
    },{ 
        path : '/table',
        name : 'table',
        component : table
    }
]


export default routes