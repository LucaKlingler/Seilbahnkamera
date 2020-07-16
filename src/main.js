import Vue from 'vue';
import App from './App.vue';
import VueSocketIO from 'vue-socket.io';
import '@babel/polyfill'
import './plugins/bootstrap-vue';
import 'mutationobserver-shim';
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'; 

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


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
