function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
  const yellingFacts = []

  let i = 0
  while (i < facts.length) {
    yellingFacts.push(`${facts[i]}!!!`)
    i++
  }
  return yellingFacts
}
