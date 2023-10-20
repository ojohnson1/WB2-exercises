"use strict"

let majorCode="BIOL"
let departmentOffice
let studentName
let advisingLocation
let major;
let student



if (majorCode=="BIOL"  ){

    student="Betty"
    major="Biology"
    advisingLocation= "Science Bldg, Room 310"
}

else if (majorCode=="CSCI"  )
{
   student="Matthew";
   major=" Computer Science"
   advisingLocation="Sheppard Hall,Room 314";
}


else if (majorCode=="ENG"  )
{
   student="Paul"
   major="English"
   advisingLocation="Kerr Hall,Room 201"
}

else if (majorCode=="HIST"  )
{
   student=" Student:Sarah"
    major="History"
   advisingLocation=" Advising Location:Kerr Hall , Room 114"
}

else if (majorCode=="MKT"  )
{
   student=" Student:John"
   major=" Major: Marketing"
   advisingLocation=" Adivising Location:Westly Hall , Room 310"
}

else 
{   
    
    major=" Major:unknown"
    advisingLocation=" Adivising Location:"

}


console.log (student,major,advisingLocation)