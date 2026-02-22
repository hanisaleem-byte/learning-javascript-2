// // ==============================
// // 1. Power Function
// // ==============================
// function power(a, b) {
//   let result = 1;
//   for (let i = 1; i <= b; i++) {
//     result *= a;
//   }
//   return result;
// }

// // ==============================
// // 2. Leap Year Function
// // ==============================
// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return "Leap Year";
//   } else {
//     return "Not a Leap Year";
//   }
// }

// // ==============================
// // 3. Area of Triangle (2 functions)
// // ==============================
// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }

// function triangleArea(a, b, c) {
//   let s = calculateS(a, b, c);
//   return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// // ==============================
// // 4. Average & Percentage (3 functions)
// // ==============================
// function average(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }

// function percentage(m1, m2, m3) {
//   return ((m1 + m2 + m3) / 300) * 100;
// }

// function mainFunction(m1, m2, m3) {
//   console.log("Average:", average(m1, m2, m3));
//   console.log("Percentage:", percentage(m1, m2, m3) + "%");
// }

// // ==============================
// // 5. Custom indexOf function
// // ==============================
// function customIndexOf(str, ch) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       return i;
//     }
//   }
//   return -1;
// }

// // ==============================
// // 6. Delete all vowels
// // ==============================
// function removeVowels(sentence) {
//   return sentence.replace(/[aeiouAEIOU]/g, "");
// }

// // ==============================
// // 7. Count successive vowels (switch)
// // ==============================
// function countSuccessiveVowels(text) {
//   let count = 0;

//   for (let i = 0; i < text.length - 1; i++) {
//     let pair = text[i] + text[i + 1];

//     switch (pair) {
//       case "aa": case "ae": case "ai": case "ao": case "au":
//       case "ea": case "ee": case "ei": case "eo": case "eu":
//       case "ia": case "ie": case "ii": case "io": case "iu":
//       case "oa": case "oe": case "oi": case "oo": case "ou":
//       case "ua": case "ue": case "ui": case "uo": case "uu":
//         count++;
//         break;
//     }
//   }

//   return count;
// }

// // ==============================
// // 8. Distance Conversion
// // ==============================
// function toMeters(km) {
//   return km * 1000;
// }

// function toFeet(km) {
//   return km * 3280.84;
// }

// function toInches(km) {
//   return km * 39370.1;
// }

// function toCentimeters(km) {
//   return km * 100000;
// }

// // ==============================
// // 9. Overtime Pay
// // ==============================
// function overtimePay(hours) {
//   if (hours > 40) {
//     return (hours - 40) * 12;
//   } else {
//     return 0;
//   }
// }

// // ==============================
// // 10. Currency Notes
// // ==============================
// function currencyNotes(amount) {
//   let hundreds = Math.floor(amount / 100);
//   amount = amount % 100;

//   let fifties = Math.floor(amount / 50);
//   amount = amount % 50;

//   let tens = Math.floor(amount / 10);

//   console.log("100 notes:", hundreds);
//   console.log("50 notes:", fifties);
//   console.log("10 notes:", tens);
// }

