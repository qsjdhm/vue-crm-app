<template>
    <div class="performance-page">
		<div class="market">
			<div class="market-header">
				本部门销售完成度 - <span>服务器销售</span>
			</div>
			<div id="marketChart" class="market-contents"></div>
			<div class="market-footer">
				<div class="average">
					<div class="pack">
						<div class="label">
							<span>年度计划平均</span>
						</div>
						<div class="value">
							2,150万元 / 12人
						</div>
					</div>
				</div>
				<div class="plan">
					<div class="pack">
						<div class="label">
							<span>实际完成</span>
						</div>
						<div class="value">
							2,090万元
						</div>
					</div>

				</div>
			</div>
		</div>

		<div class="sale">
			<div class="sale-header">
				<img src="../../../static/img/work/销量与销售额.png">
				<span>销售与销售额</span>
			</div>
			<div class="sale-contents">
				<div class="sales">
					<div class="value">
						<div>10</div>
						<div>100</div>
						<div>100</div>
					</div>
					<div class="label">
						<div>本日销量(万)</div>
						<div>本月销量(万)</div>
						<div>本年销量(万)</div>
					</div>
				</div>
				<div class="saleroom">
					<div class="value">
						<div>10</div>
						<div>100</div>
						<div>100</div>
					</div>
					<div class="label">
						<div>本日销量(万)</div>
						<div>本月销量(万)</div>
						<div>本年销量(万)</div>
					</div>
				</div>
			</div>
		</div>

		<div class="visit">
			<div class="visit-header">
				<img src="../../../static/img/work/拜访总揽.png">
				<span>客户与门店月度拜访总览</span>
			</div>
			<div class="visit-contents">
				<div class="client">
					<div class="value">
						<div>1800</div>
						<div>8650</div>
						<div>16</div>
					</div>
					<div class="label">
						<div>总拜访客户</div>
						<div>总拜访客户次数</div>
						<div>行走公司数</div>
					</div>
				</div>
				<div class="shop">
					<div class="value">
						<div>1100</div>
						<div>2650</div>
						<div>16</div>
					</div>
					<div class="label">
						<div>总拜访门店</div>
						<div>总拜访门店次数</div>
						<div>业务人员</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script type="text/ecmascript-6">


    import { mapState } from 'vuex';

	let echarts = require('echarts/lib/echarts');
	require('echarts/lib/chart/bar');
	require('echarts/lib/component/grid');
	require('echarts/lib/component/legend');


	import {
		SET_ACTIVETABBAR
	} from '../../vuex/modules/fremework';


    export default {
        components: {

        },
        data: function () {
            return {
				marketChart : null
            }
        },
		computed: {
			...mapState({
				tabbarList: state => state.fremework.tabbarList,
				activeTabbar: state => state.fremework.activeTabbar,
			}),
		},
		methods: {
			initChart () {
				// 基于准备好的dom，初始化echarts实例
				this.marketChart = echarts.init(document.getElementById('marketChart'));
				let option = {
					legend: {
						padding: 8,
						data:['季度计划','当前销量']
					},
					grid: {
						left: '14%',
						right: '7%',
						bottom: '13%',
						top: '15%',
					},
					xAxis : [
						{
							type : 'category',
							data : ['一季度','二季度','三季度','四季度'],
							boundaryGap: true,
							splitLine: {  // 网格
								show: true,
								lineStyle: {
									// 使用深浅的间隔色
									color: ['#ddd']
								}
							},
							axisLine: {
								lineStyle: {
									color: '#666'
								}
							},
						}
					],
					yAxis : [
						{
							type : 'value',
							axisLabel: {
								formatter: '{value}万'
							},
							axisLine: {
								lineStyle: {
									color: '#666'
								}
							},
						}
					],
					series : [
						{
							name:'季度计划',
							type:'bar',
							barWidth: '15%',
							itemStyle : {
								normal : {
									color: '#ff7f50',
									border: '#fff'
								}
							},
							data:[500, 500, 600, 550]
						},
						{
							name:'当前销量',
							type:'bar',
							barWidth: '15%',
							itemStyle : {
								normal : {
									color: '#87cefa',
									border: '#fff'
								}
							},
							data:[430, 680, 620, 360]
						}
					]
				};

				// 使用刚指定的配置项和数据显示图表。
				this.marketChart.setOption(option);
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
		// 此声明周期挂载dom已经开始，适用于处理dom操作
		mounted: function () {
			this.initChart();
		}
    }
</script>

<style lang="less" >
	@import '../../less/tabbar/performance.less';
</style>
