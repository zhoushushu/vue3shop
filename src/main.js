import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入Vant样式
import 'vant/lib/index.css'
import { Sidebar, SidebarItem, Tabbar, TabbarItem, ActionBar, ActionBarIcon, ActionBarButton, Divider, Popup, Overlay, Loading, Dialog, ContactCard, Form, AddressEdit, AddressList, Field, CellGroup, Cell, SwipeCell, Icon, Stepper, Card, Checkbox, CheckboxGroup, Button, Swipe, SwipeItem, PullRefresh, List, Tab, Tabs, SubmitBar, Toast } from 'vant'
// 全局引入样式
import './common/style/base.less'
// 创建实例
const app = createApp(App)
app.use(Sidebar).use(SidebarItem).use(Tabbar).use(TabbarItem).use(ActionBarButton).use(ActionBarIcon).use(ActionBar).use(Divider).use(Popup).use(Overlay).use(Loading).use(Dialog).use(Toast).use(ContactCard).use(Form).use(AddressEdit).use(AddressList).use(Field).use(CellGroup).use(Cell).use(SwipeCell).use(Icon).use(Stepper).use(Card).use(Button).use(Swipe).use(SwipeItem).use(PullRefresh).use(List).use(Tab).use(Tabs).use(SubmitBar).use(Checkbox).use(CheckboxGroup)
app.use(store)
app.use(router)
app.mount('#app')
