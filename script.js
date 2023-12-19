export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result.push("")
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

export function exercise02(args) {
  return args.toUpperCase()
}

export function exercise03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result++
    }
  }

  return result
}

export function exercise04(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Check if the current character is a space and not followed by a dash
    if (currentElement === " " && input[i + 1] !== "-") {
      result++
    }
  }

  return result + 1
}

export function exercise05(args) {
  const input = args
  // Initialize the result as false -> when there are no capital letters
  let result = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const asciiValue = currentElement.charCodeAt(0)

    // Check if the ASCII value corresponds to a capital letter (between 65 and 90) -> search in the ASCII chart
    if (asciiValue >= 65 && asciiValue <= 90) {
      result = true
      break
    }
  }

  return result
}

export function exercise06(args) {
  const input = args
  let result = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const asciiValue = currentElement.charCodeAt(0)

    if (
      (asciiValue >= 33 && asciiValue <= 64) ||
      (asciiValue >= 91 && asciiValue <= 69)
    ) {
      result = true
      break
    }
  }

  return result
}

export function exercise07(args) {
  const input = args

  for (let i = 0; i < input.length - 2; i++) {
    const firstLetter = input[i].charCodeAt()
    const secondLetter = input[i + 1].charCodeAt()
    const thirdLetter = input[i + 2].charCodeAt()

    if (
      firstLetter === 97 ||
      (firstLetter === 65 && secondLetter === 110 && thirdLetter === 100)
    ) {
      return true
    }
  }
  return false
}
