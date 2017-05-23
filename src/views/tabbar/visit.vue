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
					 class="client">
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
				console.info(newKeyword);
				this.$store.commit(SET_KEYWORD, newKeyword);
			},
            infinite(done) {
				let self = this;
                if (this.bottom >= 50) {
                    setTimeout(function () {
                        done(true)
                    }, 1000)
                    return;
                }
                setTimeout(function () {
                    let start = self.bottom + 1;
                    for (let i = start; i < start + 10; i++) {
						if (i %2 == 0) {
							self.items.push({
								'icon' : '../../../static/img/user.png',
								'name' : '李某某'+i,
								'company' : '山东浪潮集团',
								'level': '服务器部经理',
								'intention' : '继续挖掘'
							});
						} else {
							self.items.push({
								'icon' : '../../../static/img/user.png',
								'name' : '刘某某'+i,
								'company' : '北京天融信',
								'level': '华北区副总裁',
								'intention' : '即将签约'
							});
						}
                    }
					self.bottom = self.bottom + 10;
                    setTimeout(function () {
                        done();
                    })
                }, 1000)
            }
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
        mounted() {
            for (let i = 1; i <= 20; i++) {
            	if (i %2 == 0) {
					this.items.push({
						'icon' : '../../../static/img/user.png',
						'name' : '李某某'+i,
						'company' : '山东浪潮集团',
						'level': '服务器部经理',
						'intention' : '继续挖掘'
					});
				} else {
					this.items.push({
						'icon' : '../../../static/img/user.png',
						'name' : '刘某某'+i,
						'company' : '北京天融信',
						'level': '华北区副总裁',
						'intention' : '即将签约'
					});
				}
            }
            this.top = 1;
            this.bottom = 20;
        },

    }
</script>

<style lang="less" >
	@import '../../less/tabbar/visit.less';
</style>
