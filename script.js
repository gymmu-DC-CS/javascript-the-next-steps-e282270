export function exercise01(args) {
  const input = args
  const result = []


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result.push ("")
    } 
    else {
      result.push(currentElement)
    }
  }


  return result.join("")
}

export function exercise02(args){
  return args.toUpperCase()
}


export function exercise03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++){
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E"){
      result++;
    }
  }

  return result;
}

export function exercise04(args) {
  const input = args;
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    // Check if the current character is a space and not followed by a dash
    if (currentElement === " " && input[i + 1] !== "-") {
      result++;
    }
  }

  return result + 1;
}