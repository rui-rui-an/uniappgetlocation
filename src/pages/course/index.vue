<template>
    <view class="course">
      课程
    </view>
  </template>
  
  <script setup lang="ts">
  import { useCounterStore } from '@/stores/counter';
  import { onShow } from '@dcloudio/uni-app'
  const counter = useCounterStore();
  onShow(()=>{
    console.log(counter.count)
    counter.count++;
		// 方法一：可以手动触发
		counter.$patch({ count: counter.count + 1 });
		// 方法二：或者使用 actions
		counter.increment();
  })
  </script>
  
  <style>
  </style>
  