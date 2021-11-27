<template>
    <div class="basic-layout"> 
        <div class="app-header">
            <div class="left">
                <img src="https://gitee.com/lulu20001105/image/raw/32e836dc3825b5a82c61f75b9cd8f49c10da3fb1/%E6%89%8B%E6%8E%A8%E8%BD%A6.png" alt="">
                <div class="title">商品管理系统</div>
            </div>
            <div class="right">
                <div class="hello-msg">你好，xx</div>
                <div class="logout">退出</div>
            </div>
        </div>
        <div class="app-header-placeholder"></div>
        <div class="app-content">
            <div class="left">
                <app-nav />
            </div>
            <div class="right">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
    @import './index.scss';
</style>
