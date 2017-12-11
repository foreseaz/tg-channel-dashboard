const extraTags = (text) => {
  if (!text) return text
  const extractedTags = text.match(/\[(.*?)\]/g) // ['[Design]', '[Code]', ...]
  const tags = extractedTags && extractedTags.map(t => t.replace(/[^\w]/g, '').toLowerCase()) // ['design', 'code', ...]
  return tags.length > 0 ? tags : ['untagged']
}

exports.extraTags = extraTags
