<template>
    <transition name="modal">
        <div class="pg-modal" v-show="show" transition="fade">
            <slot></slot>
            <a href="javascript:void(0)" class="btn_bottom font_34 white-color" @click="close">关闭</a>  
        </div>
    </transition>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-modal {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background-color: rgba(0,0,0,0.7);
        .btn_bottom {
            position: fixed;
            bottom: 50/@rate;
            left: 50%;
            margin-left: -160/@rate;
            width: 320/@rate;
            display: block;
            height: 65/@rate;
            line-height: 65/@rate;
            text-align:center;  
            background-color: #fd3d6b;  
            border-radius: 5/@rate; 
        }         
    }
    .modal-enter-active {
        animation: modalin .3s;
    }
    .modal-leave-active {
        animation: modalout .3s;
    }
    @keyframes modalin {
        0% {
            opacity: 0;
            transform: scale(1.1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes modalout {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(1.1);
        }
    }    
</style>
<script type="text/babel">
    export default {
        name: 'PgModal',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            close() {
                this.$emit('closemodal')
            }             
        }
    }
</script>