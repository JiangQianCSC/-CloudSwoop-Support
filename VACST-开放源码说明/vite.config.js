import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 使用新的 Sass API
        silenceDeprecations: ['legacy-js-api'] // 临时抑制弃用警告
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})

