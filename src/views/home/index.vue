<template>
    <!-- 内容区域 -->
    <pg-main>
        <div class="search bg-color font_36 bold title-color">
            领取优惠券
            <router-link :to="{ path : '/search'}" class=" title-color">
                <pg-icon name="sousuo"></pg-icon>
            </router-link>
        </div>
        <div class="nav border-color  bg-color">
            <a href="javascript:void(0)" @click="navTab(-1)"  :class="[flag == -1 ? 'primary-border-color' : 'white-border-color']">全部</a>
            <a href="javascript:void(0)" @click="navTab(1)"  :class="[flag == 1 ? 'primary-border-color' : 'white-border-color']">商城优惠券</a>
            <a href="javascript:void(0)" @click="navTab(2)"  :class="[flag == 2 ? 'primary-border-color' : 'white-border-color']">门店优惠券</a>
        </div>
        <div class="content content-bg-color font_30 title-color">
            <ul>
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
        <a href="javascript:void(0)" class="btn_bottom font_34 white-color">一键领取</a>   
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
        height: 80/@rate;
        line-height: 80/@rate;
        text-align:center;
        .iconfont {
            position: absolute;
            right: 50/@rate;
            top: 4/@rate;
            font-size: 42/@rate;
        }
    }
    .btn_bottom {
        width: 100%;
        display: block;
        height: 65/@rate;
        line-height: 65/@rate;
        text-align:center;  
        background-color: #fd3d6b;   
        margin-top: 100/@rate;
    }    
    .nav {
        height: 80/@rate;
        line-height: 80/@rate;
        display: flex;
        text-align:center;
        border-width: 1px;
        border-bottom-style: solid;
        justify-content: space-around;
        a {
           padding: 0 10/@rate;
           font-size: 28;
           color: #333333;
           border-bottom-width: 4/@rate;
           border-bottom-style: solid;
        }
    }
    .content {
        padding: 20/@rate;
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