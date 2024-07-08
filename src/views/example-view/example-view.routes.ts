import type { RouteRecordRaw } from 'vue-router'

export const exampleViewRouteNames = {
  exampleGeneral: 'exampleGeneral',
  exampleColors: 'exampleColors',
  exampleFlags: 'exampleFlags',
  exampleTransitions: 'exampleTransitions',
  exampleCss: 'exampleCss',
  exampleLazyLoading: 'exampleLazyLoading',
  exampleAccessibility: 'exampleAccessibility',
  exampleWebWorker: 'exampleWebWorker',
  exampleCustomCheckbox: 'exampleCustomCheckbox',
  preAssesmentTask: 'preAssesmentTask',
  buildTree: 'buildTree'
}

export const exampleViewRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: exampleViewRouteNames.preAssesmentTask,
    meta: {
      label: 'Pre-assesment task'
    },
    component: () => import('./pre-assesment-task/PreAssesmentTask.vue')
  }
]
