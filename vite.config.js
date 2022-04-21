import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImport from 'vite-plugin-babel-import'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@":resolve(__dirname, "src"),
    },
    // alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  server: {
    // proxy: {
    //   [`${loadEnv(mode, process.cwd()).VITE_APP_BASE_API}`]: {
    //       target: loadEnv(mode, process.cwd()).VITE_TEST_HOST, // 线上
    //       // rewrite: (path:any) => path.replace(/^\/api/, ''),
    //       changeOrigin: true,
    //       ws: true
    //   }
    // }
    proxy: { // 代理配置
      '/zolonbilling': {
        target: 'http://localhost:8087/zolonbilling',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/zolonbilling/, '')
      },
      // '/zolonbilling/api/web/': {
      //   target: 'http://localhost:8087/zolonbilling/api/web',
      //   changeOrigin: true,
      //   // rewrite: { '^/zolonbilling/api/web': '' },
      //   rewrite: (path) => path.replace('','')
      // },
      // '/zolonbilling/api/pub/': {
      //   target: 'http://localhost:8087/zolonbilling/api/pub',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace( '^/zolonbilling/api/pub','')
      // },
      // '/zolonbilling/login': {
      //   target: 'http://localhost:8087/zolonbilling/login',
      //   changeOrigin: true,
      //   // rewrite: { '^/zolonbilling/login': '' },
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
    },
  },
  plugins: [
    react(),
    vitePluginImport([
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style(name) {
          return `antd/lib/${name}/style/index.css`
        },
      },
    ])
  ],
  build: {
    chunkSizeWarningLimit: 8000,
    rollupOptions: {
      output: {
        // 分包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
          }
        },
      },
    },
  },
})
