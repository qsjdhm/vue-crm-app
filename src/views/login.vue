<template>
    <div class="login-page">

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
                vpn : state => state.login.vpn,
                password : state => state.login.password,
				tel : state => state.login.tel,
            }),
        },
    }
</script>

<style lang="less" >
    @import '../less/framework.less';
</style>
