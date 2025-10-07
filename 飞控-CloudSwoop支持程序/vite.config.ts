import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      overlay: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    // 生产构建优化
    minify: 'esbuild',
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: {
          // 将大型库分离到单独的chunk
          'vendor-vue': ['vue', 'vue-router'],
          'vendor-ui': ['lucide-vue-next'],
          'vendor-utils': ['axios', 'dayjs']
        }
      }
    }
  },
  define: {
    __HMR_CONFIG_NAME__: '"default"'
  },
  optimizeDeps: {
    include: ['leaflet']
  }
})
