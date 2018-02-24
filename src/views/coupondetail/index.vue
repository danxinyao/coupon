<template>
    <pg-main class="bg-color">
        <div class="header primary-color font_24">
            <div class="price">￥<span class="font_72">100</span></div>
            <div>（每人限两张）</div>
            <img src="../../assets/images/dotted.jpg" alt="">
            <div class="middle border-color">
                <div class="text title-color">使用条件：无门槛<span>适用途径：门店</span></div>
                <div class="text text-color">有效期：2017.02.13 09:00 至 2017.03.13 11:00</div>
            </div>
        </div>
        <div class="shop text-color font_28 border-color">
            <div class="title">适用门店</div>
            <ul class="bold border-color">
                <li class="first">店铺名称</li>
                <li>地址</li>
            </ul>
            <ul v-for="n in 3">
                <li class="first">深圳南山店</li>
                <li>广东省深圳市南山区益田假日广场3层2809号</li>
            </ul> 
            <a href="javascript:void(0)" class="btn font_30 primary-color primary-border-color" @click="more(1)">更多</a>
        </div>
        <div class="shop font_28 methods  border-color">
            <div class="title">适用途径：部分商品</div>
            <ul class="bold border-color">
                <li class="first">商品标题</li>
                <li>商品编码</li>
                <li>色号</li>
            </ul>
            <ul v-for="n in 3">
                <li>深圳南山店</li>
                <li>广东省深圳</li>
                <li>广东省深圳</li>
            </ul> 
            <a href="javascript:void(0)" class="btn font_30 primary-color primary-border-color" @click="more(2)">更多</a>            
        </div>
        <a href="javascript:void(0)" class="btn_bottom font_34 white-color">领取</a>   
        <pg-modal :show="modalShow" @closemodal="close">
            <div class="shop white-color font_28 border-color modal" v-if="madalType == 1">
                <ul class="bold border-color">
                    <li class="first">店铺名称</li>
                    <li>地址</li>
                </ul>
                <ul v-for="n in 3">
                    <li class="first">深圳南山店</li>
                    <li>广东省深圳市南山区益田假日广场3层2809号</li>
                </ul> 
            </div> 
            <div class="shop font_28 white-color methods modal"  v-if="madalType == 2">
                <ul class="bold border-color">
                    <li class="first">商品标题</li>
                    <li>商品编码</li>
                    <li>色号</li>
                </ul>
                <ul v-for="n in 3">
                    <li>深圳南山店</li>
                    <li>广东省深圳</li>
                    <li>广东省深圳</li>
                </ul> 
            </div>                       
        </pg-modal>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';  
    .content-bg-color {
        background-color: #fafafa;
    }
    .bold {
        font-weight: bold;
    }
    .btn {
        display: block;
        width: 320/@rate;
        height: 65/@rate;
        line-height: 65/@rate;
        border-width: 1px;
        border-style: solid;  
        text-align:center;      
        border-radius: 10/@rate;
        margin: 25/@rate auto;
    }
    .btn_bottom {
        width: 100%;
        display: block;
        height: 65/@rate;
        line-height: 65/@rate;
        text-align:center;  
        background-color: #fd3d6b;   
        margin-top: 20/@rate;
    }
    .header {
        width: 100%;
        text-align:center;
        padding-top: 55/@rate;
        .price {
            margin-bottom: 10/@rate;
        }
        img {
            margin-top: 40/@rate;
            width: 100%;
        }
        .middle {
            padding: 30/@rate;
            border-width: 1px;
            border-bottom-style: solid;
        }
        .text {
            padding: 12/@rate;
            span {

            }
        }
    }
    .shop {
        padding: 30/@rate 20/@rate;
        border-width: 1px;
        border-bottom-style: solid; 
        &.modal {
            border-width: 0;
        }       
        ul {
            display: flex;
            li {
                padding: 10/@rate 0;
            }
            .first {
                width: 220/@rate;
            }
        }
        .bold {
            padding-top: 30/@rate;
            border-width: 1px;
            border-bottom-style: solid;
        }
    }
    .methods {
        li {
            flex: 1;
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>