const getUrls = require('get-urls')
const nodeMercuryParser = require('node-mercury-parser')
nodeMercuryParser.init('Skeosh2Uy3TeMxKeURfJKLxqN68suE3Wy9CVm3wf')

const extraTags = (text) => {
  if (!text) return text
  const extractedTags = text.match(/\[(.*?)\]/g) // ['[Design]', '[Code]', ...]
  const tags = extractedTags && extractedTags.map(t => t.replace(/[^\w]/g, '').toLowerCase()) // ['design', 'code', ...]
  return tags.length > 0 ? tags : ['untagged']
}

const extraUrl = (text) => {
  const urlSet = getUrls(text)
  const urlArr = Array.from(urlSet)

  return !!urlArr[0] ? urlArr[0] : ''
}

const preparePreview = (url) => {
  return nodeMercuryParser.get(url)
}

exports.extraTags = extraTags
exports.extraUrl = extraUrl
exports.preparePreview = preparePreview
