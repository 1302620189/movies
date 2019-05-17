import Vue from 'vue'
import Router from 'vue-router'
import Cinema from '../views/cinema.vue'
import Wode from '../views/wode.vue'
import Film from '../views/film.vue'
import Preference from '../views/preference.vue'
import hotShowing from '../views/hotShowing.vue'
import comingSoon from '../views/comingSoon.vue'
import Login from '../views/login.vue'
import Detail from '../views/detail.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/film'
        },
        {
            path: '/cinema',
            name: 'cinema',
            component: Cinema
        },
        {
            path: '/wode',
            name: 'wode',
            component: Wode,
            beforeEnter(to, from, next) {
                if (window.localStorage.getItem('userId')) {
                    next()
                } else {
                    next('/login')
                }
            }
        }, {
            path: '/film',
            name: 'film',
            redirect: 'hotShowing',
            component: Film,

            children: [{
                path: '/hotShowing',
                name: 'hotShowing',
                component: hotShowing
            }, {
                path: '/comingSoon',
                name: 'comingSoon',
                component: comingSoon
            }]
        },
        {
            path: '/preference',
            name: 'preference',
            component: Preference
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail
        },
    ]
})