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
    component: () => import(/* webpackChunkName:'community' */'@/components/building')
  },
  {
    path: '/unit',
    name: 'unit',
    component: () => import(/* webpackChunkName:'community' */'@/components/unit')
  }
]
