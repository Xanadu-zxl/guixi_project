import home from '@/components/home'

export default [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/building',
    name: 'building',
    component: () => import(/* webpackChunkName:'building' */'@/components/building')
  },
  {
    path: '/unit',
    name: 'unit',
    component: () => import(/* webpackChunkName:'unit' */'@/components/unit')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import(/* webpackChunkName:'company' */'@/components/company')
  },
  // {
  //   path: '/pdf',
  //   name: 'pdf',
  //   component: () => import(/* webpackChunkName:'pdf' */'@/components/pdf')
  // },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: () => import(/* webpackChunkName:'enterprise' */'@/components/enterprise')
  },
    {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName:'404' */'@/components/404')
  },
]
