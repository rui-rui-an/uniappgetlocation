// const BASEURL = 'http://localhost:3000/api/'
const BASEURL = 'http://192.168.1.182:21888/police'
// interface requestObj {
//   url: string
//   data: any
//   header: any // 是否置顶
//   method: string // 最大创建时间
// }
const request = ({ url, data = {}, header = {}, method = 'GET' }: any) => {
  return new Promise((resolve, reject) => {
    const token = uni.getStorageSync('token')
    if (token) {
      header.Authorization = token
    }

    uni.showLoading({
      title: '拼命加载中...',
    })

    // 异步操作
    uni.request({
      url: `${BASEURL}${url}`, //仅为示例，并非真实接口地址。
      method,
      data: data,
      header: header,
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      },
      complete: () => {
        uni.hideLoading()
      },
    })
  })
}

export { request }
