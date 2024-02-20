/*
Create two objects peson= and peson wit: popeties name and age. Ceate a function “introduce” that
pints "Hello, I'm [name], and I'm [age] yeas old." Use t:e call met:od to make peson intoduce itself
using t:e intoduce function.
*/

const person1={name:"Ramesh",age:10}
const person2={name:"Kamlesh",age:15}

function introduce(){
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old`)
}
introduce.call(person2)