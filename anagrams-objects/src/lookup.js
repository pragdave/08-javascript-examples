
export default class Lookup {
  constructor(dictionary) {
    this.signatures = new Map
    dictionary.forEach(word => this.addSignatureForWord(word))
  }

  anagramsOf(word) {
    let signature = signatureOf(word)
    return this.signatures.get(signature)
  }

  addSignatureForWord(word) {
    let signature = signatureOf(word)
    if (this.signatures.has(signature))
      this.signatures.get(signature).push(word)
    else
      this.signatures.set(signature, [word])
  }
}

function signatureOf(word) {
  return word
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}
