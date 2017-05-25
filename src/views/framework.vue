<template>
    <div class="framework-page">
        <div class="header">
            <div @click.stop.prevent="openSettings" class="menus">
                <i class="fa fa-bars"></i>
            </div>
            <div class="title">
                <span>曙光信息产业股份有限公司</span>
            </div>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
		<div class="tabbar-pack">
			<div class="tabbar-item "
				 v-for="(item, key) in tabbarList"
				 :key="key"
				 :class="activeTabbar== item.id? 'checked' : ''"
				 @click.stop.prevent="tabbarTrigger(item.id)">
				<badge
						v-if="item.badge!='0' && item.badge!=null"
						:text="item.badge"></badge>
				<i class="fa"
				   :class="[item.icon, activeTabbar== item.id? 'checked-animation' : '']"
				></i>
				<span>{{item.name}}</span>
			</div>
		</div>

        <!-- 设置 -->
        <div v-transfer-dom>
            <popup v-model="settingsModel" position="left" class="settings-model">
                <div class="fill-pack stripes"></div>
                <div class="setting-pack">
                    <div class="user">
                        <div class="img-pack">
                            <img src="../../static/img/user.png">
                        </div>
                        <div class="info-pack">
                            <div class="name">
                                <span>张某某 - 部门经理</span>
                            </div>
                            <div class="department">集团 - 大数据服务器事业部</div>
                        </div>
                    </div>
                    <div class="business">
                        <div class="item">
                            <i class="fa fa-list-ul"></i>
                            <span>本月销售任务</span>
                            <i class="fa fa-angle-right item-angle"></i>
                        </div>
                        <div class="item">
                            <i class="fa fa-phone"></i>
                            <span>深度客户拜访列表</span>
                            <i class="fa fa-angle-right item-angle"></i>
                        </div>
                        <div class="item">
                            <i class="fa fa-hourglass-half"></i>
                            <span>等待客户反馈列表</span>
                            <i class="fa fa-angle-right item-angle"></i>
                        </div>
                        <div class="item">
                            <i class="fa fa-bell-o"></i>
                            <span>最新公告及新闻</span>
                            <i class="fa fa-angle-right item-angle"></i>
                        </div>
                    </div>
                    <div class="settings">
                        <div class="item">
                            <i class="fa fa-meh-o"></i>
                            <span>我的头像</span>
                            <i class="fa fa-angle-right item-angle"></i>
                        </div>
                        <div class="item">
                            <i class="fa fa-bell-o"></i>
                            <span>系统设置</span>
                            <i class="fa fa-angle-right item-angle"></i>
                        </div>
                        <div class="item">
                            <i class="fa fa-link"></i>
                            <span>版本关于</span>
                            <i class="fa fa-angle-right item-angle"></i>
                        </div>
                    </div>

                    <div class="layout">
                        <div class="item">
                            <i class="fa fa-sign-out"></i>
                            <span>退出当前账号</span>
                            <i class="fa fa-angle-right item-angle"></i>
                        </div>
                    </div>
                </div>
            </popup>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

	import { Badge, TransferDom, Popup } from 'vux';

    import { mapState } from 'vuex';

	import {
		SET_ACTIVETABBAR
	} from '../vuex/modules/fremework';


    export default {
        directives: {
            TransferDom
        },
		components: {
			Badge,
            Popup
		},
        data: function () {
            return {
                settingsModel: false,
            }
        },
		computed: {
			...mapState({
				tabbarList: state => state.fremework.tabbarList,
				activeTabbar: state => state.fremework.activeTabbar,
			}),
		},
		methods: {
            openSettings () {
                this.settingsModel = true;
            },
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
