<template>
  <view class="home">
    主页
    <view class="father">
      <view class="child"></view>
    </view>
    <van-button type="primary">主要按钮</van-button>
    <!-- <IndexView /> -->
  </view>
</template>

<script setup lang="ts">
// import IndexView from '@/pages/index/index.vue'
import { onLoad } from '@dcloudio/uni-app'
import { request } from '@/utils/request'

onLoad(() => {
  console.log(111)
  console.log(import.meta.env.VITE_APP_URL)
  request({url:'/login/system/configuration/loginConfig/query'}).then((res: any) => {
    console.log(res)
  })
})
</script>

<style lang="less" scoped>
.home {
  .father {
    width: 50px;
    height: 50px;
    background-color: #ccc;
    .child {
      width: 20px;
      height: 20px;
      background-color: #974c4c;
    }
  }
}
</style>
