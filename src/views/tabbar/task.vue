<template>
    <div class="task-page">
        <div class="padding-pack"></div>
        <group class="time-pack">
            <datetime v-model="time" confirm-text="确认" cancel-text="取消" format="YYYY-MM-DD HH:mm" @on-change="timeChange" title="开始时间"></datetime>
        </group>
        <div class="padding-pack"></div>
        <div class="tab-pack">
            <tab v-model="tabIndex" :line-width="2" bar-active-color="#4a98eb" active-color="#4a98eb" defaultColor="#999">
                <tab-item>客户收集</tab-item>
                <tab-item>需求反馈</tab-item>
                <tab-item>待签单</tab-item>
            </tab>
        </div>
        <div class="swiper-pack">
            <swiper v-model="tabIndex" :height="swiperHeight" :show-dots="false">
                <swiper-item >
                    <div class="tab-swiper vux-center">
                        <div class="gather-list" :style="{ height : swiperHeight }">
                            <div class="item"
                                 v-for="(item, key) in treatedGatherList"
                                 :key="key">
                                <div class="date">
                                    <i class="fa fa-circle"></i>{{key}}
                                </div>
                                <div class="content"
                                     v-for="(taskItem, taskKey) in item"
                                     :key="taskKey">
                                    {{taskItem}}
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-item>
                <swiper-item >
                    <div class="tab-swiper vux-center">
                        <div class="demand-list" :style="{ height : swiperHeight }">
                            <div class="item"
                                 v-for="(item, key) in treatedDemandList"
                                 :key="key">
                                <div class="date">
                                    <i class="fa fa-circle"></i>{{key}}
                                </div>
                                <div class="content"
                                     v-for="(taskItem, taskKey) in item"
                                     :key="taskKey">
                                    {{taskItem}}
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-item>
                <swiper-item >
                    <div class="tab-swiper vux-center">
                        <div class="indent-list" :style="{ height : swiperHeight }">
                            <div class="item"
                                 v-for="(item, key) in treatedIndentList"
                                 :key="key">
                                <div class="date">
                                    <i class="fa fa-circle"></i>{{key}}
                                </div>
                                <div class="content"
                                     v-for="(taskItem, taskKey) in item"
                                     :key="taskKey">
                                    {{taskItem}}
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-item>
            </swiper>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">


    import { Datetime, Group, Tab, TabItem, Swiper, SwiperItem } from 'vux';

    import { mapState, mapGetters } from 'vuex';

	import {
		SET_ACTIVETABBAR
	} from '../../vuex/modules/fremework';


    export default {
        components: {
            Datetime,
            Group,
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        data: function () {
            return {
                time: '2016-07-12 09:30',
                tabIndex: 0,  // 通过它吧tab和swiper当前选中的链接起来
                swiperHeight: '',
            }
        },
		computed: {
			...mapState({
				tabbarList: state => state.fremework.tabbarList,
				activeTabbar: state => state.fremework.activeTabbar,
			}),
            ...mapGetters([
                'treatedGatherList',
                'treatedDemandList',
                'treatedIndentList'
            ])
		},
		methods: {
            timeChange (value) {
                console.log('change', value)
            },
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
            //this.generateAllItems();
            // 设置swiper的高度
            let pageHeight = document.querySelector('.task-page').offsetHeight;
            let paddingHeight = document.querySelector('.padding-pack').offsetHeight * 2;
            let timeHeight = document.querySelector('.time-pack').offsetHeight;
            let tabHeight = document.querySelector('.tab-pack').offsetHeight;
            this.swiperHeight = (pageHeight - paddingHeight - timeHeight - tabHeight) + 'px';
        },
    }
</script>

<style lang="less" >
	@import '../../less/tabbar/task.less';
</style>
