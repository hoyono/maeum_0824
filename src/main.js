import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'

createApp(App).use(router).mixin(mixins).use(store).mount('#app')

window.Kakao.init("a327b9f5ecd0686823e93fba77883b70");