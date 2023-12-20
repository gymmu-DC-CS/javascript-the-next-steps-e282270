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

export function exercise08(args) {
  const input = args
  let result = ""

  // Similar code like in exercise01
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // Replace 'e' with '3'
      result += "3"
    } else {
      // Keep other characters unchanged
      result += currentElement
    }
  }

  return result
}

export function exercise09(args) {
  const input = args

  // input.length=checks that the input is exactly 6 characters long
  if (input.length === 6) {
    for (let i = 0; i < input.length; i++) {
      const asciiValue = input[i].charCodeAt()

      if (asciiValue < 32 || asciiValue > 127) {
        // If a character is not in the valid ASCII range (32-127), return false
        return false
      }
    }

    // If all characters are within the valid ASCII range, return true
    return true
  }

  // If the input length is not 6, return false
  return false
}

export function exercise10(args) {
  // Extract input from arguments
  const input = args

  // RGB Hex Code is 7 characters long, for example #ffffff
  // Check if the input length is 7 and the first character is '#' and the rest are valid hexadecimal characters
  if (
    input.length === 7 &&
    input[0] === "#" &&
    /^[0-9a-fA-F]+$/.test(input.slice(1))
  ) {
    // Return true if the conditions are met
    return true
  }

  // Return false if the conditions are not met
  return false
}
