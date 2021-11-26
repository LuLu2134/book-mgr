<template>
<div class="bgd">
    <div class="auth">
    <div class="title-info">
        <img src="https://gitee.com/lulu20001105/image/raw/32e836dc3825b5a82c61f75b9cd8f49c10da3fb1/%E6%89%8B%E6%8E%A8%E8%BD%A6.png" alt="">
        <h2 class="title">商品管理系统 后台</h2>
    </div>

    <div class='form'>
      <a-tabs>
        <a-tab-pane key="1" tab="登入">
          <div class="item">
            <a-input 
              size="large" 
              placeholder="账户"
              v-model:value="loginForm.account"
            >
              <template 
                v-slot:prefix
              >
              <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input 
              size="large" 
              placeholder="密码"
              v-model:value="loginForm.password"
            >
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
            <a-button 
              size="large" 
              type="primary"
              @click="login"
            >
              登入
            </a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input 
              size="large" 
              placeholder="账户"
              v-model:value="regForm.account"
            >
              <template 
                v-slot:prefix
              >
              <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input 
              size="large"  
              placeholder="密码"
              v-model:value="regForm.password"
            >
              <template 
              v-slot:prefix
              >
              <UnlockOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input 
              size="large" 
              placeholder="邀请码"
              v-model:value="regForm.inviteCode"
            >
              <template 
              v-slot:prefix
              >
              <MailOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-button 
              @click="register" 
              size="large" 
              type="primary"
            >
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
