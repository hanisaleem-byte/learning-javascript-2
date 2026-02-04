// // // -------------------------------------------------------------------------------------------------------------------------------------------------

// // //_________________________________________ QUESTION   # 01  _______________________________ 
// // // function currentdate() {
// // //     console.log(new Date());
// // // }

// // // currentdate();
// // // -------------------------------------------------------------------------------------------------------------------------------------------------


// // //_________________________________________ QUESTION   # 02   _______________________________ 
// // // function greeting(username,fathername) {
// // //        var greetmess = "welcome " + username + "  " + fathername
// // //        console.log(greetmess)

// // // }
// // // greeting(prompt("enter your name"),prompt("enter your father name"))
   

// // // -------------------------------------------------------------------------------------------------------------------------------------------------

// // //_________________________________________ QUESTION   # 03 _______________________________ 


// // // function addition(num1,num2) {
// // //     var sum = num1 + num2
// // //     console.log(sum)
// // // }
// // // addition(+prompt("enter num1"),+prompt("enter num 2"))

// // //_________________________________________ QUESTION   # 04  _______________________________ 

// // // function calculation(num1, num2, operator) {
// // //   var operation;
// // //   if (operator == "+") {
// // //     operation = num1 + num2;
// // //   } else if (operator == "-") {
// // //     operation = num1 - num2;
// // //   } else if (operator == "*") {
// // //     operation = num1 * num2;
// // //   } else if (operator == "/") {
// // //     operation = num1 / num2;
// // //   } else {
// // //     operation = "Invalid Operator";
// // //   }
// // //   return operation;
// // //   console.log("Hello");
// // // }

// // //_________________________________________ QUESTION   # 05  _______________________________ 



// // //  function squareofnum(num) {
// // //        var sqr = num * num
// // //          console.log(sqr)
// // //  }
// // //  squareofnum(+prompt("enter any number"))

// // //_________________________________________ QUESTION   # 06  _______________________________ 

  
// // // function factorial(n) {
// // //   var result = 1;
// // //   for (var i = 1; i <= n; i++) {
// // //     result = result * i;
// // //   }
// // //   return result;
// // // }
// // // console.log(factorial(+prompt("enter any num")));


// // //_________________________________________ QUESTION   # 07  _______________________________ 
// // function counting(start, end) {
// //     for (var i = start; i <= end; i++) {
// //         document.write(i + "<br>");
// //     }
// // }

// // counting(+prompt("Enter start number"), +prompt("Enter end number"));



// //_________________________________________ QUESTION   # 08  _______________________________ 


// //  function calculateHyp(base, perp) {

// //     function calculateSquare(num) {
// //         return num * num;
// //     }

// //     var hypSquare = calculateSquare(base) + calculateSquare(perp);
// //     return Math.sqrt(hypSquare);
// // }

// // console.log(calculateHyp(+prompt("enter BASE"), +prompt("enter perp")));

// // ================= Q9 =================
// // Area of Rectangle

// function areaRect(width, height) {
//     return width * height;
// }

// // i) Arguments as values
// document.write("Area (values): " + areaRect(5, 4) + "<br>");

// // ii) Arguments as variables
// var w = 6;
// var h = 3;
// document.write("Area (variables): " + areaRect(w, h) + "<br><br>");


// // ================= Q10 =================
// // Palindrome Checker

// function isPalindrome(str) {
//     var reversed = str.split("").reverse().join("");
//     return str === reversed;
// }

// document.write("Palindrome (madam): " + isPalindrome("madam") + "<br><br>");


// // ================= Q11 =================
// // Capitalize First Letter of Each Word

// function capitalizeWords(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// document.write(capitalizeWords("the quick brown fox") + "<br><br>");


// // ================= Q12 =================
// // Find Longest Word

// function longestWord(str) {
//     var words = str.split(" ");
//     var longest = words[0];

//     for (var i = 1; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }

// document.write(longestWord("Web Development Tutorial") + "<br><br>");


// // ================= Q13 =================
// // Count Occurrence of a Letter

// function countLetter(str, letter) {
//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// document.write(countLetter("JSResourceS.com", "o") + "<br><br>");


// // ================= Q14 =================
// // The Geometrizer (Circle)

// function calcCircumference(radius) {
//     var c = 2 * Math.PI * radius;
//     document.write("The circumference is " + c.toFixed(2) + "<br>");
// }

// function calcArea(radius) {
//     var a = Math.PI * radius * radius;
//     document.write("The area is " + a.toFixed(2) + "<br>");
// }

// calcCircumference(5);
// calcArea(5);
