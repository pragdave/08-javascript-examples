
const signatures = new Map

export function initialize(Dictionary) {
  signatures.clear()
  Dictionary.forEach(addSignatureForWord)
}

export function anagramsOf(word) {
  debugger
  let signature = signatureOf(word)
  return signatures.get(signature)
}


function addSignatureForWord(word) {
  let signature = signatureOf(word)
  if (signatures.has(signature))
    signatures.get(signature).push(word)
  else
    signatures.set(signature, [word])
}

function signatureOf(word) {
  return word
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}