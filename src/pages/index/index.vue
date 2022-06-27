<template>
    <view class="index">
        <nut-navbar @on-click-title="selectDepot" title="仓库" :left-show="false"></nut-navbar>

        <nut-tabs v-model="state.tabValue">
            <nut-tabpane title="入库">
                <nut-grid :column-num="3" icon-color="#fa2c19">
                    <nut-grid-item icon="dongdong" text="入库"></nut-grid-item>
                    <nut-grid-item icon="dongdong" icon-size="28" text="入库"></nut-grid-item>
                    <nut-grid-item icon="dongdong" text="入库"></nut-grid-item>
                </nut-grid>
            </nut-tabpane>
            <nut-tabpane title="出库">
                <nut-grid :column-num="3" icon-color="#fa2c19">
                    <nut-grid-item icon="dongdong" text="出库" icon-color="#478EF2"></nut-grid-item>
                    <nut-grid-item icon="dongdong" icon-color="#478EF2" icon-size="28" text="出库"></nut-grid-item>
                    <nut-grid-item icon="dongdong" text="出库" icon-color="#478EF2"></nut-grid-item>
                </nut-grid>
            </nut-tabpane>

        </nut-tabs>

    </view>
</template>

<script>
    import {reactive, toRefs} from "vue";
    import {Toast} from "@nutui/nutui";
    import Taro from "@tarojs/taro"

    export default {
        name: "Index",
        components: {},
        setup() {
            const state = reactive({
                tabValue: "0",
            });
            const selectDepot = () => {
                Toast.text("选择仓库")
            }
            return {
                // toRefs(state) 函数可以将 reactive() 创建出来的响应式对象, 转换为普通对象,
                // 这个普通对象上的每一个属性仍然还是响应式的, 这样我们用es6对象解构赋值的时候, 就不会出现问题
                selectDepot,
                state
            }
        }
    }
</script>

<style lang="scss" scoped>


    .footer {
        position: fixed;
        bottom: 0;

    }

    .nut-tabpane {
        padding: 0 !important;

    }
</style>
