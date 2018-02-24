import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import AppCom from './components'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import routes from './routes'
import store from './vuex'
import {sync} from 'vuex-router-sync'
import infiniteScroll  from 'vue-infinite-scroll'
import '!style-loader!css-loader!less-loader!./assets/css/normalize.css' // normalize重置浏览器样式
import '!style-loader!css-loader!less-loader!./assets/font/iconfont.css'   // 引入字体样式
import '!style-loader!css-loader!less-loader!./assets/css/theme/theme.less' // 加载主题样式
import '!style-loader!css-loader!less-loader!./assets/css/common.less' // 引入公共样式

import './util/common'
import './static/flexible'
import FastClick from 'fastclick'

FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(AppCom)
Vue.use(infiniteScroll)
Vue.use(VueAwesomeSwiper)

const router = new VueRouter ({
	mode: 'history',
	routes: [
		...routes,
	]
})

sync(store,router)

/**
* [路由监控-没有登录的情况下跳转到登录页面]
* @param  {[type]} (to,from,next [description]
* @return {[type]}               [description]
*/
router.beforeEach((to, from, next) => {
    if (to.fullPath == '/') {
        next('/home')
    }
    else {
        next()
    }   
    // if (to.matched.some(record => record.meta.auth)) {
    //     if (to.fullPath == '/demo') {
    //         next()
    //     }
    //     else {
    //         next('demo')
    //     }
    // }
    // else {
    //     if (to.fullPath == '/demo') {
    //         next()
    //     }
    //     else {
    //         next('demo')
    //     }
    // }
})

new Vue({
	store,
	router,
	el: "#app",
	render: h => h(App)
})
