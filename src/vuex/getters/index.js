export default {
	// 系统配置部分
	isShowHUD : state => state.sysConfig.hud_options.show, // 是否显示系统提示信息
	optionsHUD : state => state.sysConfig.hud_options.options, // 系统提示信息的参数
    authToken: (state) => state.auth.authToken, // 登录token
    account: (state) => state.auth.account,    
}