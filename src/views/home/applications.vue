<template>
    <div class="applications-page">
        <div class="header">
            <div @click.stop.prevent="goBack" class="back">
                <i class="fa fa-angle-left"></i>
            </div>
            <div class="title">
                <span>更多应用</span>
            </div>
        </div>
		<div class="applications-list">
			<div
				v-for="(item, key) in appList"
				:key="key"
				class="item">
				<div class="stair-item"
					 @click.stop.prevent="showSubApp(key)">
					<div class="img-pack">
						<img :src="item.img | formatImgPath">
					</div>
					<div class="name-pack">
						<span>{{item.name}}</span>
					</div>
					<div class="arrows-pack">
						<i class="fa fa-angle-right" :class="{ active: item.show }"></i>
					</div>
				</div>
				<div class="sub-app-pack">
					<div v-for="(subItem, key) in item.subApp"
						 :key="key"
						 v-if="item.show"
						 class="sub-item">
						<div class="name-pack">
							<span>{{subItem.name}}</span>
						</div>
						<div class="arrows-pack">
							<i class="fa fa-angle-right"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">

	import { mapState } from 'vuex';

	import {
		SET_APPLIST
	} from '../../vuex/modules/home/applications';

	export default {
		components: {

		},
		data: function () {
			return {

			}
		},
		computed: {
			...mapState({
				appList: state => state.applications.appList
			}),
		},
		methods: {
			goBack () {
				this.$router.push({ path: '/f/home', params: { tel: '13912345678' }});
			},
			showSubApp (key) {
				let tmpAppList = [];
				// 索引类型需克隆
				for (let item of this.appList) {
					tmpAppList.push({
						'name': item.name,
						'img': item.img,
						'show': item.show,
						'subApp': item.subApp
					});
				}

				tmpAppList[key].show = !tmpAppList[key].show;
				this.$store.commit(SET_APPLIST, tmpAppList);
			}
		},
		filters:{
			// 格式化图片路径
			formatImgPath (path) {
				return ''+path;
			}
		}
	}
</script>

<style lang="less" >
	@import '../../less/home/applications.less';
</style>
