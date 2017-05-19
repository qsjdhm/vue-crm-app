<template>
    <div class="framework-page">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
		<div class="tabbar-pack">
			<div class="tabbar-item "
				 v-for="(item, key) in tabbarList"
				 :key="key"
				 :class="activeTabbar== item.id? 'checked' : ''"
				 @click.stop.prevent="tabbarTrigger(item.id)">
				<i class="fa"
				   :class="[item.icon, activeTabbar== item.id? 'checked-animation' : '']"
				></i>
				<span>{{item.name}}</span>
			</div>
		</div>
    </div>
</template>

<script type="text/ecmascript-6">


    import { mapState } from 'vuex';

	import {
		SET_ACTIVETABBAR
	} from '../vuex/modules/fremework';


    export default {
        components: {

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
		methods: {
			tabbarTrigger (id) {
				let self = this;
				// 对比当前选中的是否和之前选中的是否一致
				if (id != this.activeTabbar) {
					this.$store.commit(SET_ACTIVETABBAR, id);
					for (let item of this.tabbarList) {
						if (item.id == id) {
							self.$router.push({ path: '/f' + item.path, params: { tel: '13912345678' }});
							break;
						}
					}
				}
			},
		},

    }
</script>

<style lang="less" >
    @import '../less/framework.less';
</style>
