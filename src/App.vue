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
</style>
