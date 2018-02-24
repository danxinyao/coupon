import ajax from '../fetch'

export default{

    //登录自动领取系统主动推送的优惠券 【余宇波】
    getAutoCoupon(auth = true) {
        return ajax({
            url: '/WxMini/Coupon/GetAutoCoupon',
            method: 'get',
            auth
        })
    },
    //获取用户手动领取优惠券列表 【余宇波】
    getAppMyCouponList(data, isShowFullLoading = true, auth = true) {
        return ajax({
            url: '/WxMini/Coupon/GetAppMyCouponList',
            method: 'post',
            body: data,
            auth,
            isShowFullLoading
        })
    },    
}