"use strict"

let currentHour = 14;
let message ;
if  (currentHour <= 10 )
{

message= "Good Morning";

}


else if (currentHour >= 11 && currentHour < 17 )
{
  message = " Good Afternoon";
}


    else if (currentHour >= 17 )
    
    {

    message= "Good Evening";
       
    }

    console.log(message)