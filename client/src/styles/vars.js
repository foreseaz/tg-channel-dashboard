const M_BREAKPOINT = 768
const L_BREAKPOINT = 1020
exports.breakpoints = { M_BREAKPOINT, L_BREAKPOINT }

const fonts = {
  sansFont: '-apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Droid Sans", "Helvetica Neue", "PingFang HK", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif',
  consoleFont: '"monostena", "Lucida Console", "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace'
}
exports.fonts = fonts

const utils = {
  gutter: '15px',
  'l-gutter': '20px',
  'l-breakpoint': `${L_BREAKPOINT}px`,
  'm-breakpoint': `${M_BREAKPOINT}px`,
  'headerHeight': '60px'
}
exports.utils = utils

const colors = {
  mainColor: '#08109f',
  fontColor: '#4A4A4A',
  fontSelected: '#ff4d46',

  linkColor: '#08109f',
  linkHoverColor: '#0084FB',

  buttonColor: '#08109f',
  buttonHoverColor: '#195BBF',
  actionColor: '#F5A623',
  actionHoverColor: '#FEBD52',

  dark: '#4A4A4A',
  blue: '#08109f',
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
