import { coupon as ajax, account } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            flag: -1,
            form: {
                userName: 'test001',
                password: 'test001'
            },
            query: {
                condition: {
                    scopeType: 0
                },
                pageSize: 10,
                page: 1

            }                      
        }
    },
    computed: {
        ...mapGetters([
            'authToken'
        ])
    },    
    mounted() {
        this.login()
    },
    methods: {
        ...mapActions([
            'setAuth'
        ]),        
        show() {
            this.util.msg.loading()
        },
        navTab(val) {
            this.flag = val
        },
        //获取登录信息 
        login() {
            account.miniDevLogin(this.form).then((result) => {
                this.setAuth(result.access_token)
                this.getAutoCoupon()
                this.getpageList()
            })
        },
        //自动领取
        getAutoCoupon() {
            ajax.getAutoCoupon().then((res) => {})
        },
        //查询列表
        getpageList() {
            ajax.getAppMyCouponList(this.query).then((res) => {

            })
        }
    }
}