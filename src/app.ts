import {createApp} from 'vue'
//taro 使用taro后缀
import {Button, Toast} from '@nutui/nutui-taro';
import {Tabbar, TabbarItem, Icon} from '@nutui/nutui-taro';


import './app.scss'

const App = createApp({
    onShow(options) {
        console.log(options)
    },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast)
App.use(Tabbar)
App.use(TabbarItem)
App.use(Icon)

export default App
