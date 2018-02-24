<template>
    <!-- 内容区域 -->
    <pg-main>
        <div class="search bg-color-base font_30 ">
            <input type="text" v-model="key" placeholder="店铺名称" @keyup.enter="search">
            <a href="javascript:void(0)" class="text-color" @click="search">
                <pg-icon name="sousuo"></pg-icon>
            </a>
            <a href="javascript:void(0)" class="link-color cancel"  @click="cancel">取消</a>
        </div>
        <div class="content content-bg-color font_30 title-color">
            <div class="title">
                <span>流行美南山店</span>
                <a href="javascript:void(0)" class="font_30 primary-color primary-border-color" @click="showList = !showList">优惠券</a>                
            </div>
            <div class="address font_28">
                <pg-icon name="dizhi"></pg-icon>
                <span>广东省深圳市南山区益田假日广场3层2809号</span>
                <!-- <img src="../../assets/images/coupon_bg.jpg" height="181" width="710" alt=""> -->
            </div>
            <ul v-if="showList">
                <li v-for="n in 3">
                    <div class="li_all">
                        <img src="../../assets/images/coupon_bg_active.jpg" alt="">
                        <div class="li_content clearfix">
                            <div class="li_left left  white-color  font_24">
                                <div class="name">无门槛减</div>
                                <div class="name font_48">100 <span class="font_24">元</span></div>
                            </div>
                            <div class="li_right right">
                                <div class="li_top clearfix">
                                    <div class="left font_30 bold">优惠券</div>
                                    <router-link :to="{ path : '/coupondetail'}"  class="right font_30 primary-color">领取</router-link>
                                </div>
                                <div class="text text-color font_24">
                                    适用途径：商城
                                    <span>针对商品：部分</span>
                                </div>
                               <div class="text text-color font_24">
                                    2017.02.13 至 2017.03.13
                                </div>                            
                            </div>                                                
                        </div>                        
                    </div>
                    <div class="time fong_24">剩余时间：<span>0</span>天<span>23</span>小时<span>23</span>分<span>23</span>秒</div>
                </li>
                <li>
                    <div class="li_all">
                        <img src="../../assets/images/coupon_bg.jpg" alt="">
                        <div class="li_content clearfix">
                            <div class="li_left left  white-color  font_24">
                                <div class="name">无门槛减</div>
                                <div class="name font_48">100 <span class="font_24">元</span></div>
                            </div>
                            <div class="li_right right">
                                <div class="li_top clearfix">
                                    <div class="left font_30 bold">优惠券</div>
                                </div>
                                <div class="text text-color font_24">
                                    适用途径：商城
                                    <span>针对商品：部分</span>
                                </div>
                               <div class="text text-color font_24">
                                    2017.02.13 至 2017.03.13
                                </div>                            
                            </div>                                                
                        </div>                        
                    </div>
                </li>                                              
            </ul>
        </div>
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
    .search {
        padding: 15/@rate 20/@rate;
        input {
            display: inline-block;
            height: 60/@rate;
            line-height: 60/@rate;
            width: 610/@rate;
            background-color: #eeeeee;
            border-radius: 10/@rate;
            text-indent: 85/@rate;
            margin-right: 35/@rate;
        }
        .iconfont {
            position: absolute;
            left: 50/@rate;
            top: 22/@rate;
            font-size: 42/@rate;
        }
    }
    .content {
        padding: 20/@rate;
        .title {
            line-height: 40/@rate;
            span {
                font-weight: bold;
            }
            a {
                display: inline-block;
                width: 120/@rate;
                height: 40/@rate;
                text-align:center;
                border-width: 1px;
                border-style: solid;
                border-radius: 5/@rate;
                margin-left: 25/@rate;
            }            
        }
        .address {
            height: 90/@rate;
            line-height: 90/@rate;
            vertical-align: middle;
            i {
                color: #d1d1d1;
                font-size: 36/@rate;
            }
        }
        ul {
            li {
                .li_all {
                    margin-top:10/@rate;
                    width: 710/@rate;
                    height: 181/@rate;                    
                    position: relative;
                }
                .time {
                    height: 70/@rate;
                    line-height: 70/@rate;
                    span {
                        color: #fd3d6b;
                    }
                }
                img {
                    width: 100%;
                    position: absolute;
                }
                .li_content {
                    position: absolute;
                    width: 100%;
                    .li_left {
                        width: 220/@rate;
                        text-align: center;
                        padding-top: 50/@rate;
                        .name {
                            margin-bottom: 20/@rate;
                        }
                    }
                    .li_right {
                        width: 490/@rate;
                        padding: 25/@rate;
                        .li_top {
                            padding-bottom: 35/@rate;
                        }
                        .text {
                            line-height: 1.5;
                            span {
                                margin-left: 10/@rate;
                            }
                        }
                    }
                }
            }
        }

    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>