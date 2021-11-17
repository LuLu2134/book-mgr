<template>
<div class="bgd">
    <div class="auth">
    <div class="title-info">
        <img src="https://gitee.com/lulu20001105/image/raw/7ff89537966842e2f486464610a862aac57e841a/20211109163647.png" alt="">
        <h2 class="title">图书管理系统 后台</h2>
    </div>

    <div class='form'>
      <a-tabs>
        <a-tab-pane key="1" tab="登入">
          <div class="item">
            <a-input size="large" placeholder="账户">
              <template 
                v-slot:prefix
              >
              <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input size="large" placeholder="密码">
            <template 
              v-slot:prefix
              >
              <UnlockOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a href="">忘记密码</a>
          </div>

          <div class="item">
            <a-button size="large" type="primary">
              登入
            </a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input size="large" placeholder="账户">
              <template 
                v-slot:prefix
              >
              <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input size="large" placeholder="密码">
              <template 
              v-slot:prefix
              >
              <UnlockOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input size="large" placeholder="邀请码">
              <template 
              v-slot:prefix
              >
              <MailOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-button size="large" type="primary">
              注册
            </a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</div>

</template>

<script src="./index.js"></script>

<style lang="scss" scpoed>
  @import './index.scss';
</style>
