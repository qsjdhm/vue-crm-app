<template>
    <div class="home-page">
		<div class="header">
			<div @click.stop.prevent="openSettings" class="avatar">
				<!--<img src="../../assets/avatar.png"/>-->
				<i class="fa fa-bars"></i>
			</div>
			<div class="title">
				<span>中国普天集团本部</span>
			</div>
		</div>
		<div class="contents">
			<div class="month-performance">
				<div class="value">
					本月业绩: {{monthPerformance.value | formatMoney}}
				</div>
				<div class="level">
					<i class="fa fa-star-o"></i>第{{monthPerformance.level}}名
				</div>
			</div>
			<div class="work">
				<div class="work-header">
					我的工作
				</div>
				<div class="work-contents">
					<grid :rows="4">
						<grid-item
								v-for="(item, key) in myWork"
								:key="key"
								:link="item.path"
								:label="item.name">
							<img slot="icon" :src="item.img | formatImgPath">
						</grid-item>
					</grid>
				</div>
			</div>
			<div class="client">
				<div class="vertical potential">
					<div class="img-pack">
						<img src="../../../static/img/work/拜访管理.png">
					</div>
					<div class="value-pack">
						<div class="value">
							<span>{{potential}}</span>
						</div>
						<div class="label">潜在客户</div>
					</div>
				</div>
				<div class="vertical">
					<div class="crosswise order">
						<div class="img-pack">
							<img src="../../../static/img/work/销售任务.png">
						</div>
						<div class="value-pack">
							<div class="value">
								<span>{{order}}</span>
							</div>
							<div class="label">订单客户</div>
						</div>
					</div>
					<div class="crosswise retain">
						<div class="img-pack">
							<img src="../../../static/img/work/数据看板.png">
						</div>
						<div class="value-pack">
							<div class="value">
								<span>{{retain}}</span>
							</div>
							<div class="label">保有客户</div>
						</div>
					</div>
				</div>
			</div>

		</div>
    </div>
</template>

<script type="text/ecmascript-6">

	import { Grid, GridItem } from 'vux';

    import { mapState } from 'vuex';

	import {
		SET_ACTIVETABBAR
	} from '../../vuex/modules/fremework';


    export default {
        components: {
			Grid,
			GridItem
        },
        data: function () {
            return {

            }
        },
		computed: {
			...mapState({
				tabbarList: state => state.fremework.tabbarList,
				activeTabbar: state => state.fremework.activeTabbar,

				monthPerformance: state => state.home.monthPerformance,
				myWork: state => state.home.myWork,

				potential: state => state.home.potential,
				order: state => state.home.order,
				retain: state => state.home.retain,
			}),
		},
		methods: {
			openSettings () {

			}
		},
		filters:{
			// 格式化金额
			formatMoney (s) {
				s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";
				let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
				let t = "";
				for (let i = 0; i < l.length; i++) {
					t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
				}
				return t.split("").reverse().join("") + "." + r;
			},
			// 格式化图片路径
			formatImgPath (path) {
				return '../../static/img/'+path;
			}
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
	@import '../../less/tabbar/home.less';
</style>
