<template>
  <view class="my">
    <van-button type="primary" class="phone_btn" size="small" @click="toCheck">人脸认证</van-button>
  </view>
</template>

<script setup lang="ts">
const toCheck = () => {
  // console.log(111)
  uni.startSoterAuthentication({
    requestAuthModes: ['fingerPrint', 'facial'],
    challenge: '360728199604120052',
    success: res => {
      console.log(res)
    },
    fail: err => {
      console.log(err)
    },
  })
  // uni.checkIsSupportSoterAuthentication({
  //   success: res => {
  //     console.log(res)
  //     wx.startFacialRecognitionVerify({//小程序获取验证结果
  //         name: "廖睿",//用户名称
  //         idCardNumber: '360728199604120052',//身份证号码
  //         success: (red)=>{
  //             if(red.errMsg == 'startFacialRecognitionVerify:ok'){
  //                 //console.log(red,'人脸识别结果：success');
  //             }
  //         },
  //         fail:(err)=>{
  //             //console.log(err,'人脸识别结果：fail')
  //             uni.showToast({
  //                 title: '人脸识别失败',
  //                 icon: 'none',
  //                 duration: 20000,
  //             });
  //         }
  //     })
  //   },
  //   fail: err => {
  //     console.log('支持生物认证失败', err)
  //   },
  // })
}
</script>

<style scoped></style>
