import Cookies from 'universal-cookie'
import _get from 'lodash/get'
export const isBrowser = typeof window !== 'undefined'

/*
  Set language by user from client side
*/
const cookies = new Cookies()
export const setLanguage = lang => {
  cookies.set('LANGUAGE', lang)
  window.location.reload()
}

export const getLanguage = () => {
  // language first time loaded
  const defaultLang = cookies.get('LANGUAGE') || _get(window, ['navigator', 'userLanguage']) || _get(window, ['navigator', 'language'], '')

  switch (defaultLang.toLowerCase()) {
    case 'zh-cn':
      return 'zh-cn'
    case 'zh-tw':
    case 'zh-hk':
      return 'zh-hk'
    case 'en':
    default:
      return 'en'
  }
}
