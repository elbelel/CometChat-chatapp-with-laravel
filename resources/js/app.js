/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import { CometChat } from "@cometchat-pro/chat"
import {APP_ID,REGION} from "./constant/constant"

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('login-component', require('./views/Login.vue').default);
Vue.component('register-component', require('./views/Register.vue').default);
Vue.component('chat-component', require('./views/Chat.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(REGION).build();
 CometChat.init(APP_ID, appSetting).then(
   () => {
     console.log("Initialization completed successfully");
     // You can now call login function.
     const app = new Vue({
        el: '#app',
    });
   },
   error => {
     console.log("Initialization failed with error:", error);
     // Check the reason for error and take appropriate action.
   }
 );

