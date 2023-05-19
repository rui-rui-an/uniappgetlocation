<template>
  <view class="home">
    <van-cell-group>
      <van-field :value="submitForm.username" required clearable label="姓名：" placeholder="请输入用户名" />
      <van-field :value="submitForm.password" label="性别：" placeholder="请输入性别" required border="{{ false }}" />
      <van-field :value="submitForm.idNumber" label="身份证：" placeholder="请输入身份证" required border="{{ false }}" />
      <div class="location">
        <div class="text">地理位置信息：</div>
        <van-button v-if="!submitForm.longitude" type="info" size="small" @click="getLocation">获取位置</van-button>
        <div v-else class="location_info">经度：{{ submitForm.longitude }} 纬度：{{ submitForm.latitude }}</div>
      </div>
      <div class="location">
        <div class="text">手机号：</div>
        <van-button v-if="!submitForm.userphone" type="info" size="small" @click="getUserphone">获取手机号</van-button>
        <div v-else class="location_info">{{ submitForm.userphone }}</div>
      </div>
      <div class="submit_btn">
        <van-button type="info" class="phone_btn" @click="submitAll">提交</van-button>
      </div>
      <van-popup :show="show" position="bottom" custom-style="height: 35%;" :close-on-click-overlay="false" @close="onClose">
        <div class="popup">
          <div class="title">
            <div class="img_box">
              <image style="width: 20px; height: 20px" src="@/static/tabs/icon_home_selected@2x.png" alt="" />
            </div>
            <div class="name">大家一起吃炸鸡 申请</div>
          </div>
          <div class="main_content">
            <div class="wx_text">申请获取你的手机号</div>
            <div class="self_text">用于获取个人资料</div>
          </div>
          <div class="btn_list">
            <van-button type="default" class="phone_btn" size="small" @click="refuseUse">拒绝</van-button>
            <van-button type="primary" class="phone_btn" size="small" @click="agreeUse">允许</van-button>
          </div>
        </div>
      </van-popup>
    </van-cell-group>
  </view>
</template>

<script setup lang="ts">
// import IndexView from '@/pages/index/index.vue'
import { onLoad } from '@dcloudio/uni-app'
// import { request } from '@/utils/request'
import { reactive, ref } from 'vue'
const showPicker = ref(false)
const show = ref(false)
const onClose = () => {
  show.value = false
}
const columns = ['男', '女']
const submitForm = reactive({
  username: 'lisi',
  sex: 20,
  userphone: '',
  password: '',
  idNumber: '',
  uploader: [],
  currCity: '',
  Baidulocation: [],
  latitude: 0,
  longitude: 0,
})
onLoad(() => {
  console.log(111)
  console.log(import.meta.env.VITE_APP_URL)
  // request({ url: '/login/system/configuration/loginConfig/query' }).then((res: any) => {
  //   console.log(res)
  // })
})

const refuseUse = () => {
  submitForm.userphone = ''
  show.value = false
}
const agreeUse = () => {
  submitForm.userphone = '15979058318'
  show.value = false
}
const onSubmit = () => {}
// const getUserPostionFromBaidu = () => {
//   // 获取当前城市
//   const geolocation = new window.BMap.Geolocation()
//   geolocation.getCurrentPosition(r => {
//     console.log(r)
//     const city = r.address.city // 返回当前城市
//     submitForm.currCity = city
//     // this.$set(this.Baidulocation, 0, r.longitude);
//     // this.$set(this.Baidulocation, 1, r.latitude);
//   })
// }
const submitAll = () => {}


const getLocation = () => {
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      console.log(res)
      console.log('当前位置的经度：' + res.longitude)
      submitForm.latitude = res.latitude
      submitForm.longitude = res.longitude
      console.log('当前位置的纬度：' + res.latitude)
    },
  })
}
const getUserphone = () => {
  show.value = true
}
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
  .location {
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .text {
      margin-left: 5px;
    }
  }
  .submit_btn {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    ::v-deep .phone_btn {
      width: 180px;
      .van-button {
        width: 100%;
      }
    }
  }
  .popup {
    .title {
      display: flex;
      margin: 14px 10px;
      font-size: 14px;
      .img_box {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .main_content {
      margin-left: 10px;
      .wx_text {
        font-size: 13px;
      }
      .self_text {
        font-size: 12px;
        color: #635e5e;
      }
    }
    .btn_list {
      margin-top: 42px;
      display: flex;
      justify-content: center;
      .phone_btn {
        margin: 0 10px;
      }
    }
  }
}
</style>
