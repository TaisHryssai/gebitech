/** @format */

import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

//Icons
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Library Icons
library.add(faBars);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//PAGES


Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);



import VueRouter from 'vue-router'

import HomeComponent from './pages/HomeComponent'
import ExampleCardComponent from './pages/ExampleCardComponent'
import ExampleButtonComponent from './pages/ExampleButtonComponent';
import ExampleModalComponent from './pages/ExampleModalComponent';
import ExampleFullcalendarComponent from './pages/ExampleFullcalendar';
// import ButtonComponent from

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },

  {
    path: '/card',
    name: 'card',
    component: ExampleCardComponent
  },

  {
    path: '/button',
    name: 'button',
    component: ExampleButtonComponent
  }, 

  {
    path: '/modal',
    name: 'modal',
    component: ExampleModalComponent
  },

  {
    path: '/fullcalendar',
    name: 'fullcalendar',
    component: ExampleFullcalendarComponent
  }, 
]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");