import { exampleViewRouteNames } from '@/views/example-view/example-view.routes'

export const routeNames = {
  rootPage: 'rootPage',

  ...exampleViewRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
