/*
5.You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their corresponding squares.
*/

const uniqueNum= new Set();
uniqueNum.add(2);
uniqueNum.add(4);
uniqueNum.add(6);

const squareMap= new Map();

uniqueNum.forEach(number =>{
    squareMap.set(number,number*number);
});

console.log(uniqueNum);
console.log(squareMap);

squareMap.forEach((num,sq)=>{
    console.log(`${num} : ${sq}`)
})