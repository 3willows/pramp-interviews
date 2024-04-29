function bracketMatch(text) {
  let needsClosing = 0
  let needsOpening = 0
  for (let char of text) {
    if (char === "(") {
      needsClosing++
    }
    if (char === ")") {
      if (needsClosing > 0) {
        needsClosing--
      } else needsOpening++
    }
  }
  if (needsClosing) {
    console.log(`closing brackets that needs opening: ${ needsOpening}`)
  }
  if (needsOpening) {
    console.log(`open brackets that needs closing: ${needsClosing}`)
  }
  return needsClosing + needsOpening
}

// This satisfies Pramp's 8 tests.  Is it guaranteed to work, e.g. by way of some proof?