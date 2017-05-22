<template>
    <div class="home-page">
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
    </div>
</template>

<script type="text/ecmascript-6">

	import { Grid, GridItem } from 'vux';

    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/legend');

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
                marketChart : null
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

			},
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
        // 此声明周期挂载dom已经开始，适用于处理dom操作
        mounted: function () {
            this.initChart();
        }
    }
</script>

<style lang="less" >
	@import '../../less/tabbar/home.less';
</style>
