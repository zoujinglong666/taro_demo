export default defineAppConfig({
    pages: [
        'pages/index/index',
        'pages/home/index',
        'pages/cart/index',
    ],
    tabBar: {
        list: [{
            pagePath: 'pages/index/index',
            text: '首页',


        },
            {
                pagePath: 'pages/cart/index',
                text: '商品',


            },
            {
                pagePath: 'pages/home/index',
                text: '我的',

            }
        ],
        'color': '#000',
        'selectedColor': '#56abe4',
        'backgroundColor': '#fff',
        'borderStyle': 'white'

    },

    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    }
})


