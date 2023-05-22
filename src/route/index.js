// настройки для переадресации на другие компоненты

window.Vue = require('vue')
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',  // этот мод используется для смены компонентов без перезагрузки страницы
  routes: [
    {
      path: '/',  // если главная страница
      component: require('../components/mainPage/mainPage.vue').default, 
    },
    {
      path: '/streampage',  // если страница стрима машинок
      component: require('../components/streamPage/streamPage.vue').default, 
    },
    {
      path: '/iframepage',  // если страница стрима машинок
      component: require('../components/iframePage/iframePage.vue').default, 
    },
  ],
});

