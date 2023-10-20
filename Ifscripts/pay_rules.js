"use strict"

var payRate=17.30;
var hoursWorked=45;
var fulltimeHours=40;
var normalHoursPay= payRate * hoursWorked;

console.log(normalHoursPay)

if (hoursWorked >= 40)
{
normalHoursPay= payRate*1.5 * (hoursWorked-fulltimeHours) + payRate * fulltimeHours
}
var grossPay=" The gross pay is " + normalHoursPay.toFixed(2);

console.log(grossPay)