import Vue from 'vue'
import Router from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/about',
        name: 'About',
        component: () => import ('../views/About.vue')
    },
    {
        path: '/edit',
        name: 'Edit',
        component: () => import ('../views/About.vue')
    }
   
]

const router = new Router({
    mode: 'history',
    routes
})

export default router