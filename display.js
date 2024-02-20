/*
Create a simple JavaScript function named displayInfo that takes to paametes (name and role) and
logs a message
Use call to invoke the displayInfo function ith specific arguments
Use apply to invoke the displayInfo function with aguments passed as an array
Create another function named greet that logs a greeting ith this context
Use bind to ceate a new function boundgreet ith a specific context and log the greeting.
*/

function displayInfo(name,role){
    console.log(`Name : ${name}, Role : ${role}`)
}

displayInfo.call(displayInfo,"ramesh","driver")

displayInfo.apply(displayInfo,["Suresh","Gardener"])