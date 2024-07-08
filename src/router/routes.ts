import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import { exampleViewRoutes } from '@/views/example-view/example-view.routes'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.exampleGeneral },
  children: [
    // list of views that use default layout
    ...exampleViewRoutes
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  defaultLayoutRoutes
]

export {
  routes,
  defaultLayoutRoutes
}
