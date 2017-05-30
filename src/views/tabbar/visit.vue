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
        <div class="list-pack">
            <scroller :on-infinite="infinite">
                <div v-for="(item, index) in items"
					 class="client"
                     :key="index"
                     @click.stop.prevent="goDetails(item.id)">
					<div class="img-pack">
						<img :src="item.icon">
					</div>
					<div class="value-pack">
						<div class="value">
							<span>{{item.name}} - {{item.level}}</span>
						</div>
						<div class="label">
							<span class="company">{{item.company}}</span>
							<span class="intention">意向: {{item.intention}}</span>
						</div>
					</div>
                </div>
            </scroller>
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
                allItems: [],  // 所有的数据，供每次下拉加载会从这里取数据
                items: [],
				top: 0,
				bottom: 0
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
				this.$store.commit(SET_KEYWORD, newKeyword);
                if (newKeyword === '') {
                    // 初始化全部数据
                    this.generateAllItems();
                } else {
                    this.filterKeyword();
                }
			},
            // 初始化全部数据
            generateAllItems () {
                this.allItems = [];
                for (let i = 1; i <= 45; i++) {
                    if (i %2 == 0) {
                        this.allItems.push({
                            'id' : i,
                            'icon' : './static/img/client-logo/inspur.jpg',
                            'name' : '李某某'+i,
                            'company' : '山东浪潮集团',
                            'level': '采购部经理',
                            'intention' : '继续挖掘'
                        });
                    } else {
                        this.allItems.push({
                            'id' : i,
                            'icon' : './static/img/client-logo/topsec.jpg',
                            'name' : '刘某某'+i,
                            'company' : '北京天融信',
                            'level': '华北区副总裁',
                            'intention' : '即将签约'
                        });
                    }
                }

                // 从全部数据截取当前展示数据
                this.items = this.allItems.slice(0, 15);
                this.top = 1;
                this.bottom = 15;
            },
            // 根据关键字过滤出展示数据
            filterKeyword () {
                // 循环过滤出items中符合搜索的数据
                let tmpList = [];
                for (let item of this.allItems) {
                    if (item.name.indexOf(this.keyword) > -1) {
                        tmpList.push(item);
                    }
                }

                // 从全部数据截取当前展示数据
                this.allItems = tmpList;
                this.items = this.allItems.slice(0, 15);
                this.top = 1;
                this.bottom = 15;
            },
            infinite (done) {
				let self = this;
                if (this.bottom >= 45) {
                    setTimeout(function () {
                        done(true)
                    }, 1000)
                    return;
                }
                setTimeout(function () {
                    let start = self.bottom;
                    // 从全部数据截取当前展示数据
                    for (let item of self.allItems.slice(start, start+15)) {
                        self.items.push(item);
                    }
					self.bottom = self.bottom + 15;
                    setTimeout(function () {
                        done();
                    })
                }, 1000)
            },
            goDetails(id) {
                this.$router.push({ path: '/visitDetails/'+id, params: { tel: '13912345678' }});
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
        mounted() {
            // 初始化全部数据
            this.generateAllItems();
        },

    }
</script>

<style lang="less" >
	@import '../../less/tabbar/visit.less';
</style>
