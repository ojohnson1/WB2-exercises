"use strict"

var payRate=25;
var hoursWorked=40;

var normalHoursPay= payRate * hoursWorked;
console.log(normalHoursPay)

if (hoursWorked >= 40)
{
normalHoursPay= payRate*1.5 * (hoursWorked-40) + payRate * 40
}

console.log(normalHoursPay)