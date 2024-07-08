import enLocale from 'element-plus/es/locale/lang/en'
import { generalTranslations as general } from './general.translation'
import { validationTranslations as validation } from './validation.translation'
import { exampleViewTranslations as exampleGeneral } from '@/views/example-view/translations/en'

export const en = {
  [enLocale.name]: {
    el: enLocale.el,

    general,
    validation,
    exampleGeneral
  }
}
