import deLocale from 'element-plus/es/locale/lang/de'
import { generalTranslations as general } from './general.translation'
import { validationTranslations as validation } from './validation.translation'
import { exampleViewTranslations as exampleGeneral } from '@/views/example-view/translations/de'

export const de = {
  [deLocale.name]: {
    el: deLocale.el,

    general,
    validation,
    exampleGeneral
  }
}
