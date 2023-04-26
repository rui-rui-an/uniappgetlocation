<template>
  <view class="home">
    主页
    <view class="father">
      <view class="child"></view>
    </view>
    <van-button type="primary">主要按钮</van-button>
    <IndexView />
  </view>
</template>

<script setup lang="ts">
import IndexView from '@/pages/index'
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
