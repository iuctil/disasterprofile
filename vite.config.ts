import { defineConfig } from 'vite'
//import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      require('vite-plugin-yaml'),
      /*
      vueI18n({
        include: ["json", "yaml" , "yml"],
      })
      */
    ],
/*
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          nested: resolve(__dirname, 'hugo/index.html')
        }
      }
    } 
*/
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/assets/variables.scss";` },
    },
  },
})
