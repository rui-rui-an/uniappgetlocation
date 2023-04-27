<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
    </view>
    <button open-type="getUserInfo" @getuserinfo="getuserinfo">getuserinfo获取个人资料登录</button>
    <button @click="toLogin">getUserProfile获取个人资料登录</button>
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">唤起授权手机号登录</button>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
onLoad(() => {})
const getuserinfo = (e: any) => {
  console.log(e)
}
const toLogin = () => {
  uni.getUserProfile({ desc: '用于获取个人资料' }).then(res2 => {
    console.log(res2)
  })
}
const getPhoneNumber = (e: any) => {
  console.log(e)
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .box {
    width: 100%;
  }
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
