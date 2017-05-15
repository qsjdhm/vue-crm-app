<template>
    <div class="framework-page">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <tabbar v-model="activeTabbar">
            <tabbar-item
                v-for="(item, key) in tabbarList"
                :index="item.id"
                :key="key"
                :badge="item.badge"
                :link="item.path">
                <img slot="icon" src="../assets/u196.png">
                <span slot="label">{{item.name}}</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script type="text/ecmascript-6">


    import { Tabbar, TabbarItem } from 'vux';

    import { mapState } from 'vuex';


    export default {
        components: {
            Tabbar,
            TabbarItem
        },
        data: function () {
            return {

            }
        },
        computed: {
            ...mapState({
                tabbarList: state => state.fremework.tabbarList,
                activeTabbar: state => state.fremework.activeTabbar,
            }),
        },
    }
</script>

<style lang="less" >
    @import '../less/framework.less';
</style>
