


window.Vue = require('vue') // подключаем Vue

import store from './store/index.js' // подключаем файл с натсройками хранилища Vuex

import router from './route/index.js'  // подключаем файл с настройками адресации между компонентами

// import regeneratorRuntime from "regenerator-runtime"; // Для работы с асинхронными  функциями

import "./styles/main.sass"


Vue.component('main-page', require('./components/mainPage/mainPage.vue').default) // главная страница



// создаем экземпляр vue где подключаем самое главное переадрасицию, визуализацию элемнетов и хранилище
new Vue({
  store,
  router: router,
  el: "#app" 
})