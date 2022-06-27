<template>
    <nut-tabbar @tab-switch="tabSwitch" class="footer">
        <nut-tabbar-item tab-title="首页" icon="home" :to="'/pages/index/index'"></nut-tabbar-item>
        <nut-tabbar-item tab-title="购物车" icon="cart" :to="'/pages/cart/index'"></nut-tabbar-item>
        <nut-tabbar-item tab-title="我的" icon="my" :to="'/pages/home/index'"></nut-tabbar-item>
    </nut-tabbar>
</template>

<script>
    import Taro from "@tarojs/taro"
    export default {
        name: "Footer",
        components: {},
        setup() {
            const tabSwitch = (item, index) => {
                console.log(item, index);
                console.log(item.to)
                //要引入全局taro
                Taro.redirectTo({
                    url: item.to
                })

            }
            return {
                tabSwitch,
            }
        }
    }
</script>

<style lang="scss">


    .footer {
        position: fixed;
        bottom: 0;

    }
</style>
