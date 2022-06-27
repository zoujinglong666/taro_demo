import {createApp} from 'vue'
//taro 使用taro后缀
import {Button} from '@nutui/nutui-taro';
import {Tabbar, TabbarItem, Icon, Tabs, TabPane, Navbar, Grid, GridItem,} from '@nutui/nutui-taro';
import {Toast} from '@nutui/nutui-taro';

import './app.scss'

const app = createApp({
    onShow(options) {
        console.log(options)
    },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

app.use(Button).use(Toast)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Icon)
app.use(Tabs);
app.use(TabPane);
app.use(Navbar);
app.use(Toast);
app.use(Grid);
app.use(GridItem);
app.use(Tabs);
app.use(TabPane);


export default app
