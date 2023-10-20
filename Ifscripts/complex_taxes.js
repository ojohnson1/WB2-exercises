"use strict"

let payRate=10;
let hoursWorked=45;
let grossPay= payRate * hoursWorked;
let annualPay= grossPay*52;
let taxRate;
let filingStatus="joint";


console.log(annualPay)

if(filingStatus="single"){

if (annualPay < 12000 )

{
    taxRate=.05
}

else if (annualPay >= 12000 &&  annualPay < 25000)

{
  taxRate=.10
}

else if (annualPay >=25000 && annualPay < 75000 )

{
 taxRate=.15
}

else if (annualPay >= 75000)

{
    taxRate=.20
}
}

if(filingStatus="joint"){
if (annualPay < 12000 && filingStatus =="joint")

{
    taxRate;
}

else if (annualPay >= 12000 &&  annualPay < 25000 && filingStatus =="joint")

{
  taxRate=.06
}

else if (annualPay >=25000 && annualPay < 75000 && filingStatus =="joint")

{
 taxRate=.11
}

else if (annualPay >= 75000 && filingStatus =="joint")

{
    taxRate=.20
}
}

let taxesWithheld=grossPay*taxRate;
let netPay= grossPay - taxesWithheld;

let message =" You worked " + hoursWorked + " this period. " + " Because you earned " + payRate 
+ " per hour, your gross pay is " + grossPay + " Your filing status is " + filingStatus 
+ " Your tax withholdings this period is " + taxesWithheld  + " Your net pay is "+ netPay; 


console.log(message)