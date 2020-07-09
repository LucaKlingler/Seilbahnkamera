import Vue from 'vue'
//import store from './store'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
//import SocketIO from "socket.io-client"
 
Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://metinseylan.com:1992',
    vuex: {
        //store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
    options: { path: "/my-app/" } //Optional options
}))
 
new Vue({
    //router,
    //store,
    render: h => h(App)
}).$mount('#app')
