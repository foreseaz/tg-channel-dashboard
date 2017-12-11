const M_BREAKPOINT = 768
const L_BREAKPOINT = 1020
exports.breakpoints = { M_BREAKPOINT, L_BREAKPOINT }

const fonts = {
  sansFont: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Droid Sans", "Helvetica Neue", "PingFang HK", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif'
}
exports.fonts = fonts

const utils = {
  gutter: '15px',
  'l-gutter': '20px',
  'l-breakpoint': `${L_BREAKPOINT}px`,
  'm-breakpoint': `${M_BREAKPOINT}px`,
  'headerHeight': '110px'
}
exports.utils = utils

const colors = {
  mainColor: '#1050B0',
  fontColor: '#4A4A4A',

  linkColor: '#1050B0',
  linkHoverColor: '#0084FB',

  buttonColor: '#1050B0',
  buttonHoverColor: '#195BBF',
  actionColor: '#F5A623',
  actionHoverColor: '#FEBD52',

  dark: '#4A4A4A',
  blue: '#1050B0',
  grey: '#BCBEBC',
  red: '#DB4437',
  green: '#25A42F'
}
exports.colors = colors

const viewports = {
  '--s-viewport': `(max-width: ${M_BREAKPOINT - 1}px)`, // small size
  '--m-viewport': `(max-width: ${L_BREAKPOINT - 1}px)`, // medium size
  '--l-viewport': `(min-width: ${L_BREAKPOINT}px)` // large size
}
exports.viewports = viewports

exports.variables = {
  ...fonts,
  ...utils,
  ...colors
}
