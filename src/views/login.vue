<template>
    <div class="login-page">
		<div class="login-form">
			<div class="logo-pack">
				<img src="../assets/login_logo.png"/>
			</div>
			<group  class="weui-cells_form">
				<x-input :disabled="isLogin" title="VPN账号" type="text" v-model="vpn" @on-change="vpnChange"></x-input>
				<x-input :disabled="isLogin" title="密码" type="password" v-model="password" @on-change="passwordChange"></x-input>
				<x-input :disabled="isLogin" title="手机" type="text" v-model="tel" @on-change="telChange"></x-input>
			</group>
		</div>

		<div class="login-button-pack">
			<x-button :disabled="isLogin" @click.native="loginSystem">登录CRM</x-button>
		</div>

    </div>
</template>

<script type="text/ecmascript-6">

    import { XInput, Group, XButton, TransferDomDirective as TransferDom } from 'vux';
	import { Loading } from 'vux';

    import { mapState } from 'vuex';


    export default {
		directives: {
			TransferDom
		},
        components: {
			XInput,
			Group,
			XButton
        },
        data: function () {
            return {
				isLogin : false
            }
        },
		methods: {
			vpnChange (newVpn) {
				console.info(newVpn);
			},
			passwordChange (newVpn) {
				console.info(newVpn);
			},
			telChange (newVpn) {
				console.info(newVpn);
			},
			loginSystem () {
				this.$vux.loading.show({
					text: '登录中, 请稍候...'
				})
				//this.isLogin = !this.isLogin;
				console.info('loginSystem');
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
    @import '../less/login.less';



</style>
