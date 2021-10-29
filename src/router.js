import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('./components/index'),
    }, {
      path: '/index',
      name: 'index',
      component: () => import('./components/index'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./components/home/home'),
        },
        {
          path: '/management',
          name: 'management',
          component: () => import('./components/management'),
        },
        {
          path: '/metadata',
          name: 'metadata',
          component: () => import('./components/metadata')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('./components/user')
        },
        {
          path: '/userDetail',
          name: 'userDetail',
          component: () => import('./components/userDetail')
        },
        {
            path: '/pineapple',
            name: 'pineapple',
            component: () => import('./components/pineapple')
        },
        {
          path: '/expert',
          name: 'expert',
          component: () => import('./components/expert')
      },
        {
            path: '/systemUsage',
            name: 'systemUsage',
            component: () => import('./components/systemUsage')
        }
      ]
    },{
      path:'/login',
      name: 'login',
      component: () => import('./components/login')
    }
  ]
})
