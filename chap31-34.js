var date = new Date();

// 1. Current date & time
document.write("<h3>1. Current Date & Time</h3>");
document.write(date + "<br><br>");

// 2. Current month in words
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month: " + months[date.getMonth()]);

// 3. First 3 letters of day
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert("Today is: " + days[date.getDay()]);

// 4. Fun day
if(date.getDay() === 0 || date.getDay() === 6){
  alert("It's Fun day");
}

// 5. First or last days
document.write("<h3>5. Month Days</h3>");
if(date.getDate() < 16){
  document.write("First fifteen days of the month<br><br>");
}else{
  document.write("Last days of the month<br><br>");
}

// 6. Minutes since Jan 1, 1970
document.write("<h3>6. Minutes since Jan 1, 1970</h3>");
var minutes = date.getTime() / (1000 * 60);
document.write(minutes + "<br><br>");

// 7. AM or PM
if(date.getHours() < 12){
  alert("Its AM");
}else{
  alert("Its PM");
}

// 8. Last day of last month of 2020
document.write("<h3>8. Last Day of 2020</h3>");
var laterDate = new Date(2020, 11, 31);
document.write(laterDate + "<br><br>");

// 9. Days since 1st Ramadan (June 18, 2015)
document.write("<h3>9. Days since 1st Ramadan</h3>");
var ramadan = new Date("June 18, 2015");
var diff = date - ramadan;
var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write(daysPassed + " days have passed<br><br>");

// 10. Seconds since Jan 1, 2015
document.write("<h3>10. Seconds since Jan 1, 2015</h3>");
var start2015 = new Date("Jan 1, 2015");
var diffSeconds = Math.floor((date - start2015) / 1000);
document.write(diffSeconds + " seconds<br><br>");

// 11. Add 1 hour
document.write("<h3>11. Time after 1 hour</h3>");
var newTime = new Date();
newTime.setHours(newTime.getHours() + 1);
document.write(newTime + "<br><br>");

// 12. Date 100 years back
var backDate = new Date();
backDate.setFullYear(backDate.getFullYear() - 100);
alert("Date 100 years back: " + backDate);

// 13. Birth year from age
var age = prompt("Enter your age");
var birthYear = date.getFullYear() - age;
document.write("<h3>13. Birth Year</h3>");
document.write("Your birth year is: " + birthYear + "<br><br>");

// 14. K-Electric Bill
document.write("<h3>14. K-Electric Bill</h3>");
var customerName = "Zaid";
var units = 410;
var chargesPerUnit = 16;
var lateSurcharge = 350;

var monthName = months[date.getMonth()];
var netAmount = units * chargesPerUnit;
var grossAmount = netAmount + lateSurcharge;

document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + monthName + "<br>");
document.write("Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br>");
document.write("Net Amount: " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + lateSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount: " + grossAmount.toFixed(2) + "<br>");
