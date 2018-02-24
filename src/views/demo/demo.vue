<template>
    <!-- 内容区域 -->
    <pg-main>
        <a href="javascript:void(0)" @click="show">loading</a>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
</style>

<script type="text/babel">
    import demo from './demo'
    export default {
        ...demo
    }
</script>