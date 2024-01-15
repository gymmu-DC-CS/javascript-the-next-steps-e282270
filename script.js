export function exercise01(args) {
  const input = args
  const result = []

  // Code found on www.w3schools.com on date 21/11/23 link: https://www.w3schools.com/js/js_loop_for.asp
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result.push("")
    } else {
      result.push(currentElement)
    }
  }
  // Join the elements in the result array into a single string and return it
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
      // If true, increment the result counter
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
    // Code found on www.w3schools.com on date 05/12/23 link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
    if (currentElement === " " && input[i + 1] !== "-") {
      result++
    }
  }
  // Return the final count of spaces not followed by a dash, plus 1 -> the last word does not have a space
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
    // Ascii table: https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/ASCII-Table.svg/2522px-ASCII-Table.svg.png
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
    // Check if the ASCII value corresponds to a special character
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
  // Get the ASCII values of the current character and the next two characters.
  for (let i = 0; i < input.length - 2; i++) {
    const firstLetter = input[i].charCodeAt()
    const secondLetter = input[i + 1].charCodeAt()
    const thirdLetter = input[i + 2].charCodeAt()
    // Check if the sequence corresponds to 'and' (case-insensitive)
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
    // number below found on: 20/12/2023 on website: https://stackoverflow.com/questions/9221362/regular-expression-for-a-hexadecimal-number
    /^[0-9a-fA-F]+$/.test(input.slice(1))
  ) {
    // Return true if the conditions are met
    return true
  }

  // Return false if the conditions are not met
  return false
}

export function exercise11(args) {
  // Check if args is a string and has a length of exactly 1 character
  if (typeof args !== "string" || args.length !== 1) {
    // Return null for invalid args
    return null
  }

  // Extract the single character from the args string
  const char = args[0]

  // Get the ASCII value of the character
  const asciiValue = char.charCodeAt(0)

  // Return the ASCII value
  return asciiValue
}

export function exercise12(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement == "e") {
      return i // returns the current check position "i" if it is an 'e'
    }
  }
  return -1
}

export function exercise13(args) {
  const input = args
  let latestE = -1 // variable to store the last found 'e,' initialized to -1 to avoid showing the 0th index as a solution in texts without 'e'

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement == "e") {
      latestE = i // stores the last found 'e' in the variable
    }
  }
  return latestE
}

export function exercise14(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement == "e") {
      count++
      if (count === 3) return i // returns the current check position (i) as soon as the counter reaches 3
    }
  }
  if (count == input.length) return 2 // if the counter matches the input length (indicating only 'e's), returns 2
  if (count < 3) return -1 // if the counter is less than 3, returns -1 (not enough 'e's for there to be 3)
}
