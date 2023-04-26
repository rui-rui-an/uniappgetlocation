import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  server: {
    proxy: {
      '/api': {
        //'/api'是自行设置的请求前缀
        target: 'http://localhost:5000',
        changeOrigin: true, //用于控制请求头中的host值
        rewrite: path => path.replace(/^\/api/, ''), //路径重写，（正则）匹配以api开头的路径为空（将请求前缀删除）
      },
    },
  },
})
