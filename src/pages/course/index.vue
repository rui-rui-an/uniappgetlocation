<template>
  <view class="course"> 
    <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude"></map>
    </view>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { onLoad } from '@dcloudio/uni-app'
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
const counter = useCounterStore()
const latitude = ref()
const longitude = ref()
onShow(() => {
  console.log(counter.count)
  counter.count++
  // 方法一：可以手动触发
  counter.$patch({ count: counter.count + 1 })
  // 方法二：或者使用 actions
  counter.increment()
})
onLoad(() => {
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      console.log(res)
      console.log('当前位置的经度：' + res.longitude)
      latitude.value = res.latitude
      longitude.value = res.longitude
      console.log('当前位置的纬度：' + res.latitude)
    },
  })
})
</script>

<style></style>
