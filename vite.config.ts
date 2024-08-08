import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',  // 允许局域网访问
    port: 5173,        // 你可以选择任何未被占用的端口
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src')
    }
  }
})
