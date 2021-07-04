import {createApp, defineAsyncComponent} from 'vue'
import App from './App.vue'
import ElementPlus from '@v3p/element-plus/ElementPlus'
import '@v3p/element-plus/themeChalk'
import router from "./router";

const app = createApp(App)
app.use(router)
app.use(ElementPlus).mount('#emp-root')
