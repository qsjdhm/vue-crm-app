<template>
    <div class="task-page">
        task page
    </div>
</template>

<script type="text/ecmascript-6">


    import { mapState } from 'vuex';

	import {
		SET_ACTIVETABBAR
	} from '../../vuex/modules/fremework';


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

		},
		// 此生命周期挂载阶段还没开始，所以适用于修改父级dom和数据准备操作
		created: function () {
			// 打开此view应该设置顶部菜单和子级菜单的选中状态
			const id = this.$route.meta.id;
			// 如果路由中当前页面的state中的选中菜单不同需要设置菜单和与之对应的当前页面id
			if (this.activeTabbar !== id) {
				this.$store.commit(SET_ACTIVETABBAR, id);
			}
		},
    }
</script>

<style lang="less" >
	@import '../../less/tabbar/task.less';
</style>
