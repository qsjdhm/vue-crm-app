<template>
    <div id="app">
        <transition name="slide-fade">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>

<script>
    import store from './vuex/store';
    export default {
        name: 'app',
        store: store
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding: 0;
    margin: 0;
    height: 100%;
    overflow-x: hidden;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}

.slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(0px);
    opacity: 1;
}

.child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    top: 0;
    bottom: 0;
    overflow-x: hidden!important;
}
</style>
