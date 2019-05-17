// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myFooter from './components/footer.vue'
import myList from './components/list.vue'
Vue.config.productionTip = false
Vue.component('myFooter', myFooter)
Vue.component('myList', myList)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})