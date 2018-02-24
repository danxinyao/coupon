// 系统提示框
import hud from './hud/hud.vue'
// 页面框架
import main from './main/index.vue'
// Icon
import icon from './icon/icon.vue'
// 图片
import img from './img/img.vue'
import modal from './modal/modal.vue' //遮罩层

const install = Vue => {
	Vue.component(hud.name, hud) // 系统提示信息
    Vue.component(main.name, main) // 主页框架
    Vue.component(icon.name, icon) // 图标
    Vue.component(img.name, img) // 图片
    Vue.component(modal.name, modal) // 遮罩层
}

export default install