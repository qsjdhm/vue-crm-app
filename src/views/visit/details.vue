<template>
    <div class="visit-details-page">
        <div class="header">
            <div @click.stop.prevent="goBack" class="back">
                <i class="fa fa-angle-left"></i>
            </div>
            <div class="title">
                <span>拜访详情</span>
            </div>
        </div>
        <div class="business-card">
            <div class="company">
                <span class="name">
                    {{clientData.company}}
                </span>
                <span class="intention">
                    <i
                        v-for="n in clientData.intention"
                        :key="n"
                        class="fa fa-star"
                    ></i>
                </span>

            </div>
            <div class="visit">
                <div class="time">
                    <i class="fa fa-calendar"></i>
                    <span>{{clientData.date}}</span>
                </div>
                <div class="tel">
                    <i class="fa fa-phone"></i>
                    <span>{{clientData.tel}}</span>
                </div>
                <div class="img-pack">
                    <img src="../../../static/img/tel.png">
                </div>
            </div>
            <div class="linkman">
                <div class="name">
                    <i class="fa fa-user"></i>
                    <span>{{clientData.name}}</span>
                </div>
                <div class="level">
                    <span>职位: {{clientData.level}}</span>
                </div>
            </div>
        </div>
        <div class="padding-pack"></div>
        <div class="tab-pack">
            <tab v-model="tabIndex" :line-width="2" bar-active-color="#4a98eb" active-color="#4a98eb" defaultColor="#999">
                <tab-item>拜访记录</tab-item>
                <tab-item>详情</tab-item>
                <tab-item>任务安排</tab-item>
            </tab>
        </div>
        <div class="swiper-pack">
            <swiper v-model="tabIndex" :height="swiperHeight" :show-dots="false">
                <swiper-item >
                    <div class="tab-swiper vux-center">
                        <div class="visit-list" :style="{ height : swiperHeight }">
                            <div class="item">
                                <div class="date">
                                    <i class="fa fa-circle"></i>2016-06-13
                                </div>
                                <div class="content">
                                    <div class="name">
                                        <div class="name-label">王西瓜</div>
                                        <div class="name-value">DRC2601</div>
                                    </div>
                                    <div class="tel">
                                        <div class="tel-label">13912345678</div>
                                        <div class="tel-value">意向产品</div>
                                    </div>
                                    <div class="type">
                                        <div class="type-label"><i class="fa fa-location-arrow"></i>现场拜访</div>
                                        <div class="type-value">10 : 00</div>
                                    </div>
                                    <div class="result">
                                        预约来总部考察产品实力
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="name">
                                        <div class="name-label">王西瓜</div>
                                        <div class="name-value">DRC2601, DRC-H2201</div>
                                    </div>
                                    <div class="tel">
                                        <div class="tel-label">13912345678</div>
                                        <div class="tel-value">意向产品</div>
                                    </div>
                                    <div class="type">
                                        <div class="type-label"><i class="fa fa-phone"></i>电话沟通</div>
                                        <div class="type-value">11 : 00</div>
                                    </div>
                                    <div class="result">
                                        预约本部工程师实现POC
                                    </div>
                                    <div class="result">
                                        客户相对比较中意我们产品，主要是对产品稳定性和配套服务有更高的要求。
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="date">
                                    <i class="fa fa-circle"></i>2016-06-06
                                </div>
                                <div class="content">
                                    <div class="name">
                                        <div class="name-label">王西瓜</div>
                                        <div class="name-value">DRC2601</div>
                                    </div>
                                    <div class="tel">
                                        <div class="tel-label">13912345678</div>
                                        <div class="tel-value">意向产品</div>
                                    </div>
                                    <div class="type">
                                        <div class="type-label"><i class="fa fa-phone"></i>现场拜访</div>
                                        <div class="type-value">10 : 00</div>
                                    </div>
                                    <div class="result">
                                        预约来总部考察产品实力
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="name">
                                        <div class="name-label">王西瓜</div>
                                        <div class="name-value">DRC2601, DRC-H2201</div>
                                    </div>
                                    <div class="tel">
                                        <div class="tel-label">13912345678</div>
                                        <div class="tel-value">意向产品</div>
                                    </div>
                                    <div class="type">
                                        <div class="type-label"><i class="fa fa-phone"></i>电话沟通</div>
                                        <div class="type-value">11 : 00</div>
                                    </div>
                                    <div class="result">
                                        预约来总部考察产品实力
                                    </div>
                                    <div class="result">
                                        客户说比较忙, 暂时抽不出时间过来, 下次再约。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-item>
                <swiper-item >
                    <div class="tab-swiper vux-center">
                        <div class="details-list" :style="{ height : swiperHeight }">
                            <div class="item">
                                <div class="item-label">客户编号</div>
                                <div class="item-value">KH20166025002</div>
                            </div>
                            <div class="item">
                                <div class="item-label">类别</div>
                                <div class="item-value">重点挖掘客户</div>
                            </div>
                            <div class="item">
                                <div class="item-label">意向产品</div>
                                <div class="item-value">DRC2601, DRC-H2201</div>
                            </div>
                            <div class="item">
                                <div class="item-label">既是客户又是供应商</div>
                                <div class="item-value">否</div>
                            </div>
                            <div class="item">
                                <div class="item-label">介绍对象</div>
                                <div class="item-value">北京云适配</div>
                            </div>
                            <div class="item">
                                <div class="item-label">渠道等级</div>
                                <div class="item-value">一级渠道</div>
                            </div>
                        </div>
                    </div>
                </swiper-item>
                <swiper-item >
                    <div class="tab-swiper vux-center">
                        <div class="task-list" :style="{ height : swiperHeight }">
                            <div class="item">
                                <div class="date">
                                    <i class="fa fa-circle"></i>9 : 30 - 11 : 30
                                </div>
                                <div class="content">
                                    <div class="name">
                                        <div class="name-label">部署部门销售任务</div>
                                        <div class="name-value">
                                            <span class="completed">已解决</span>
                                        </div>
                                    </div>
                                    <div class="result">
                                        对新人任务量进行考核、评审。
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="date">
                                    <i class="fa fa-circle"></i>13 : 30 - 16 : 30
                                </div>
                                <div class="content">
                                    <div class="name">
                                        <div class="name-label">与联想、戴尔开会商讨销售策略</div>
                                        <div class="name-value">
                                            <span class="unfinished">未解决</span>
                                        </div>
                                    </div>
                                    <div class="result">
                                        必须以我们为核心，严格控制价格，利用价格形成统一。
                                    </div>
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

    import { Tab, TabItem, Swiper, SwiperItem  } from 'vux';

    export default {
        components: {
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        data: function () {
            return {
                allItems: [],  // 所有的数据，供每次下拉加载会从这里取数据
                id: '',  // 当前客户的id
                clientData: {},  // 当前客户数据信息
                tabIndex: 0,  // 通过它吧tab和swiper当前选中的链接起来
                swiperHeight: '',
            }
        },
		methods: {
            // 初始化全部数据
            generateAllItems () {
                for (let i = 1; i <= 45; i++) {
                    if (i %2 == 0) {
                        this.allItems.push({
                            'id' : i,
                            'name' : '李某某'+i,
                            'company' : '山东浪潮集团有限公司',
                            'level' : '采购部经理',
                            'date' : '2017-05-24',
                            'tel' : '13912345678',
                            'intention' : 3
                        });
                    } else {
                        this.allItems.push({
                            'id' : i,
                            'name' : '刘某某'+i,
                            'company' : '北京天融信有限公司',
                            'level' : '华北区副总裁',
                            'date' : '2017-10-06',
                            'tel' : '13912345678',
                            'intention' : 2
                        });
                    }
                }
                for (let item of this.allItems) {
                    if (item.id == this.id) {
                        this.clientData = item;
                        break;
                    }
                }
            },
            goBack () {
                this.$router.push({ path: '/f/visit', params: { tel: '13912345678' }});
            }
		},
		// 此生命周期挂载阶段还没开始，所以适用于修改父级dom和数据准备操作
		created: function () {
            this.id = this.$route.params.detailsId;


		},
        mounted() {
            // 初始化全部数据
            this.generateAllItems();

            // 设置swiper的高度
            let pageHeight = document.querySelector('.visit-details-page').offsetHeight;
            let barHeight = document.querySelector('.header').offsetHeight;
            let cardHeight = document.querySelector('.business-card').offsetHeight;
            let paddingHeight = document.querySelector('.padding-pack').offsetHeight;
            let tabHeight = document.querySelector('.tab-pack').offsetHeight;
            this.swiperHeight = (pageHeight - barHeight - cardHeight - paddingHeight - tabHeight) + 'px';
        },

    }
</script>

<style lang="less" >
	@import '../../less/visit/details.less';
</style>
