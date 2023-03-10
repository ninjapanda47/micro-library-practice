const numberToString = (number) => {
  let result = "";
  number = number.toString();
  if (number.length > 6) {
    return "Error: 999,999 is the limit";
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

  const processTwoDigits = (i, number, result) => {
    if (number[i] !== "0") {
      // 10 - 90
      if (number[i] !== "1" || (number[i] === "1" && number[i + 1] === "0")) {
        if (i !== 0) {
          return result.concat(`-${tens[number[i]]}`);
        } else {
          return tens[number[i]];
        }
      } else if (number[i] === "1" && number[i + 1] !== "0") {
        // 11 - 19
        if (i !== 0) {
          return result.concat(`-${teens[number[i + 1]]}`);
        } else {
          return teens[number[i + 1]];
        }
      }
    }
  };

  const processSingleDigits = (i, number, result) => {
    // the number before is 0 or 2-9
    if ((number[i] !== "0" && number[i - 1] === "0") || number[i - 1] !== "1") {
      return result.concat(`-${single[number[i]]}`);
    }
  };

  const addHundred = (i, number, result) => {
    if (
      (number.length % 3 === 0 && (i === 0 || i === 3)) ||
      (number.length === 5 && i === 2) ||
      (number.length === 4 && i === 1 && number[i] !== "0")
    )
      return result.concat("-hundred");
  };
  const addThousand = (i, number, result) => {
    if (
      (number.length === 6 && i === 2) ||
      (number.length === 5 && i === 1) ||
      (number.length === 4 && i === 0)
    )
      return result.concat("-thousand");
  };

  for (let i = 0; i < number.length; i++) {
    // single digit
    if (number.length === 1) {
      return single[number[i]];
    }
    // double digit
    if (number.length === 2) {
      if (number[1] === "0") {
        return tens[number[0]];
      }
      if (number[0] === "1") {
        return teens[number[1]];
      } else {
        return tens[number[0]].concat(`-${single[number[1]]}`);
      }
    }
    // 3 or 6 digit
    if (number.length % 3 === 0) {
      if (i === 0 || i === 3) {
        if (i === 0) {
          result = single[number[i]];
        } else {
          result = result.concat(`-${single[number[i]]}`);
        }
      }
      if (i - 1 === 0 || i - 1 === 3) {
        result = processTwoDigits(i, number, result)
          ? processTwoDigits(i, number, result)
          : result;
      }
      if ((i - 2 === 0 || i - 2 === 3) && number[i] !== "0") {
        result = processSingleDigits(i, number, result)
          ? processSingleDigits(i, number, result)
          : result;
      }
    }
    if (number.length === 4) {
      if (i === 0) {
        result = single[number[i]];
      }
      if (i === 1 && number[i] !== "0") {
        result = result.concat(`-${single[number[i]]}`);
      }
      if (i === 2) {
        result = processTwoDigits(i, number, result)
          ? processTwoDigits(i, number, result)
          : result;
      }
      if (i === 3 && number[i] !== "0") {
        result = processSingleDigits(i, number, result)
          ? processSingleDigits(i, number, result)
          : result;
      }
    }
    if (number.length === 5) {
      if (i === 0) {
        result = processTwoDigits(i, number, result)
          ? processTwoDigits(i, number, result)
          : result;
      }
      if (i === 1) {
        if (number[i] !== "0" && number[0] !== "1") {
          result = result.concat(`-${single[number[i]]}`);
        }
      }
      if (i === 2) {
        result = result.concat(`-${single[number[i]]}`);
      }
      if (i === 3) {
        result = processTwoDigits(i, number, result)
          ? processTwoDigits(i, number, result)
          : result;
      }
      if (i === 4 && number[i] !== "0") {
        result = processSingleDigits(i, number, result)
          ? processSingleDigits(i, number, result)
          : result;
      }
    }

    result = addHundred(i, number, result)
      ? addHundred(i, number, result)
      : result;

    result = addThousand(i, number, result)
      ? addThousand(i, number, result)
      : result;
  }

  return result;
};
exports.numberToString = numberToString;
