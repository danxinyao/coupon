/**
 * 账户相关
 */

import ajax from '../fetch'

export default {
    miniLogin(data) {
        return ajax({
            url: '/Account/MiniLogin',
            method: 'post',
            body: data
        })
    },   
    //微信小程序开发登录
    miniDevLogin(data) {
        return ajax({
            url: '/Account/MiniDevLogin',
            method: 'post',
            body: data
        })
    },       
}