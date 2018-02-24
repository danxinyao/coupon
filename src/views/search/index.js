// demo
export default {
    data() {
        return {
            key: "",
            showList: false,
        }
    },
    mounted() {

    },
    methods: {
        show() {
            this.util.msg.loading()
        },
        cancel() {
            this.key = ''
            console.log('cancel')
        },
        search() {
            console.log('search')
        }
    }
}