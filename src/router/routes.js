import home from '@/components/home'

export default [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/community',
    name: 'community',
    component: () => import(/* webpackChunkName:'community' */'@/components/community')
  }
]
