// demo
export default {
    data() {
        return {
            key: "",
            modalShow: false,//遮罩层控制
            madalType: 1,
        }
    },
    mounted() {

    },
    methods: {
        //更多
        more(val) {
            this.modalShow = true
            this.madalType = val
        },
        //关闭
        close() {
            this.modalShow = false
        }
    }
}