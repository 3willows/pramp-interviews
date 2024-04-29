function bracketMatch(text) {
  let loneOpening = 0
  let reqiuredOpening = 0
  for (let i = 0; i < text.length; i++) {
    if (Array.from(text)[i] === "(") {
      loneOpening++
    }
    if (Array.from(text)[i] === ")") {
      if (loneOpening > 0){
        loneOpening--
      }
      else reqiuredOpening++
    }
  }
  // console.log(`lone opening: ${reqiuredOpening}`)
  // console.log(`required opening: ${reqiuredOpening}`)
  return Math.abs(loneOpening + reqiuredOpening)
}

// This satisfies Pramp's 8 tests.  Is it guaranteed to work, e.g. by way of some proof?