import { useLanguage } from '../contexts/LanguageContext'
import * as enTranslations from '../common/max.en_us'
import * as esTranslations from '../common/max.es_es'
import { Translations, TranslationKey } from '../types/translations'

export const useTranslations = () => {
  const { language } = useLanguage()
  
  const translations: Translations = language === 'en' ? enTranslations.max : esTranslations.max
  
  return {
    t: (key: TranslationKey) => translations[key],
    translations
  }
}
