
export function convertToAnagramMap(wordList) {
  return wordList.reduce(addSignature, new Map())
}

export function anagramsOf(word, map) {
  let signature = signatureOf(word)
  return map.get(signature)
}

/// private

function addSignature(map, word) {
  let signature = signatureOf(word)
  if (map.has(signature))
    map.get(signature).push(word)
  else
    map.set(signature, [word])
  return map
}


function signatureOf(word) {
  return word
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}
