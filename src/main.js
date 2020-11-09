import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入Vant样式
import 'vant/lib/index.css'
import { Button, Icon, Tabbar, TabbarItem } from 'vant'
// 创建实例
const app = createApp(App)
app.use(Button).use(Icon).use(Tabbar).use(TabbarItem)
app.use(store)
app.use(router)
app.mount('#app')
