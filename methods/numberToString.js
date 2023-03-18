const numberToString = (number) => {
  let result = "";
  number = number.toString();
  if (number.length > 9) {
    throw new Error("999,999,999 is the limit");
  }
  const single = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  const teens = {
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen",
  };
  const tens = {
    1: "ten",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };

  const processTwoDigits = (i, number) => {
    if (number[i - 1] !== "0") {
      if (
          number[i - 1] !== "1" ||
          (number[i - 1] === "1" && number[i] === "0")
      ) {
        if (number[i] !== "0") {
          return `${tens[number[i - 1]]}-${single[number[i]]}`;
        }
        return tens[number[i - 1]];
      } else {
        return teens[number[i]];
      }
    }
  };

  if (number.length === 1) {
    return single[number[0]];
  }

  const checkAndAdd = (result, currentString, number) => {
    if (result) {
      if (!result.includes("thousand") && number.length > 3) {
        return currentString.concat(`-thousand-`).concat(result);
      }
      if (!result.includes("million") && number.length > 6) {
        return currentString.concat(`-million-`).concat(result);
      }
      return result;
    } else {
      if (number.length > 6) {
        return currentString.concat(`-million`);
      }
      if (number.length > 3) {
        return currentString.concat(`-thousand`);
      }
      return currentString;
    }
  };
  // work backwards 3 digits at a time approach
  for (let i = number.length - 1; i >= 0; i--) {
    let threeDigits;
    let twoDigits;
    let twoDigitsString = number[i - 1]
        ? number.substring(i - 1, i + 1)
        : undefined;
    let threeDigitString = number[i - 2]
        ? number.substring(i - 2, i + 1)
        : undefined;
    // if not 100
    if (twoDigitsString !== "00") {
      twoDigits = processTwoDigits(i, number);
      if (number[i - 2]) {
        if (twoDigits) {
          threeDigits = `${single[number[i - 2]]}-hundred`.concat(
              `-${twoDigits}`
          );
        } else {
          threeDigits = `${single[number[i - 2]]}-hundred`.concat(
              `-${single[number[i]]}`
          );
        }
      }
      // undefined for 00
    } else {
      if (threeDigitString !== "000") {
        threeDigits = `${single[number[i - 2]]}-hundred`;
      }
    }

    if (threeDigitString) {
      if (!result) {
        if (!number[i - 3]) {
          result = checkAndAdd(result, threeDigits, number);
        } else {
          result = threeDigits;
        }
      } else {
        result = checkAndAdd(result, threeDigits, number);
      }
      i = i - 2;
    } else if (twoDigitsString) {
      result = checkAndAdd(result, twoDigits, number);
      i--;
    } else {
      let currentSingle = single[number[i]];
      result = checkAndAdd(result, currentSingle, number);
    }
  }

  return result;
};
exports.numberToString = numberToString;
