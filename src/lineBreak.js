export default function lineBreak(sentence, columns) {
  let newSentence = []

  const words = sentence.split(' ')

  let contadorQntLetras = 0

  let index = 0
  words.forEach((word) => {
    if (contadorQntLetras + word.length >= columns) {
      contadorQntLetras = 0
      index += 1
    }

    newSentence[index] += word + ' '
    contadorQntLetras += word.length + 1
  })

  newSentence = newSentence.map((line) => {
    let newLine = ''
    newLine = line.replace('undefined', '').trim()
    return newLine
  })

  return newSentence
}
