<template>
    <div class="visit-page">
		<div class="search-pack">
			<div class="background-pack">
				<i class="fa fa-search"></i>
				<div class="input-pack">
					<group class="weui-cells_form">
						<x-input placeholder="搜索拜访客户" type="text" v-model="keyword" @on-change="keywordChange"></x-input>
					</group>
				</div>
			</div>
		</div>
    </div>
</template>

<script type="text/ecmascript-6">


	import { XInput, Group } from 'vux';

    import { mapState } from 'vuex';

	import {
		SET_ACTIVETABBAR
	} from '../../vuex/modules/fremework';

	// 引入此页面派发器
	import {
		SET_KEYWORD
	} from '../../vuex/modules/tabbar/visit';

    export default {
		components: {
			XInput,
			Group
		},
        data: function () {
            return {

            }
        },
		computed: {
			...mapState({
				tabbarList: state => state.fremework.tabbarList,
				activeTabbar: state => state.fremework.activeTabbar,

				keyword : state => state.visit.keyword,
			}),
		},
		methods: {
			keywordChange (newKeyword) {
				console.info(newKeyword);
				this.$store.commit(SET_KEYWORD, newKeyword);
			},
		},
		// 此生命周期挂载阶段还没开始，所以适用于修改父级dom和数据准备操作
		created: function () {
			// 打开此view应该设置顶部菜单和子级菜单的选中状态
			const id = this.$route.meta.id;
            console.info(id);
			// 如果路由中当前页面的state中的选中菜单不同需要设置菜单和与之对应的当前页面id
			if (this.activeTabbar !== id) {
				this.$store.commit(SET_ACTIVETABBAR, id);
			}
		},

    }
</script>

<style lang="less" >
	@import '../../less/tabbar/visit.less';
</style>
