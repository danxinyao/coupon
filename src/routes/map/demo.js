/**
 * 主页
 */
const Demo = resolve => require(['views/demo/demo.vue'], resolve) // demo
const Home = resolve => require(['views/home/index.vue'], resolve) // 领取优惠券
const Search = resolve => require(['views/search/index.vue'], resolve) // 搜索
const Coupondetail = resolve => require(['views/coupondetail/index.vue'], resolve) // 优惠券详情

export default [
    {
        path: '/demo',
        name: 'demo',
        component: Demo,
        meta: {
            title: 'Demo'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: '领取优惠券'
        }
    },    
    {
        path: '/search',
        name: 'search',
        component: Search,
        meta: {
            title: '搜索'
        }
    },  
    {
        path: '/coupondetail',
        name: 'coupondetail',
        component: Coupondetail,
        meta: {
            title: '优惠券详情'
        }
    },       
]