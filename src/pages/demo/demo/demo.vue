<template>
    <div>
        <!-- 头部组件 -->
        <nav-header :title="title"></nav-header>

        <!-- 底部组件 -->
        <nav-footer :items="footerItem" @clickItem="clickButtonItem"></nav-footer>

        <div class="content-body">
            <!-- 数据绑定 -->
            <h1>{{ msg }}</h1>
            <p>
                数据绑定：
                <input v-model="msg" />
            </p>

            <!-- 单向改变数据 -->
            <p>
                <button @click="changeTitle">单向改变数据：改变标题</button>
            </p>

            <!-- 改变状态 -->
            <div class="mt-20">
                <div v-show="isLoading === true">加载中...</div>
                <div v-show="isLoading === false">加载完成</div>
                <button @click="changeLoading">改变加载中状态</button>
            </div>

            <!-- API数据获取 -->
            <div class="mt-20">
                <button @click="getList">API数据获取</button>
            </div>

            <div class="mt-20">
                <input v-model="testTxt">
                <div align="center">@Watch</div>
            </div>
            
            <div class="mt-20">
                <input v-model="testTxt1">
                <div align="center">get 计算属性</div>
            </div>

            <div class="mt-20">
                <button @click="runGoTo1">跳转test1</button>
                <button @click="runGoTo2">跳转test2</button>
            </div>

            <div class="mt-20">
                本地缓存测试（storage）<br>
                <input v-model="storTest"><br>
                <button @click="setStorageTest('storage-test')">写入缓存</button>
                <button @click="removeStorageTest">删除缓存</button>
            </div>

            <div class="mt-20">
                <h4> 使用scss样式，样式撰写可用变量的形式</h4>
                <div class="size-base">基础字体大小</div>
                <div class="size-small">基础字体大小</div>
                <div class="size-title">基础字体大小</div>
                <div class="size-large">基础字体大小</div>
                <div class="size-large-big">基础字体大小</div>
                <h4> 使用scss样式，样式撰写可用嵌套的格式。。。。</h4>
            </div>

            <h2 @click="runGoTo3('shouye')">点击进入官网</h2>
        </div>
    </div>
</template>
<style src="./demo.scss" lang="scss" scoped></style>
