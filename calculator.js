/*
7. Tasks
Create an object named calculator with methods add, subtract, and multiply
Implement t:e calculate met:od in t:e calculato object, w:ic: takes an opeation ('add', 'subtact', or
'multiply') and two numbers
Use call to peform an addition operation using the calculate method
Use apply to peform a multiplication operation using the calculate method with arguments as an array
Ceate another object named discountCalculator with a discount percentage property and a method
applyDiscount
Use bind to ceate a new function calculateDiscount that is bound to the discountCalculator object and
can be reused.
*/

const calculator={
    add : function(a,b){
        return a+b;
    },
    subtract : function(a,b){
        return a-b;
    },
    multiply : function(a,b){
        return a*b;
    },

    calculate : function(operation,a,b){
        if(operation==="add"){
            return this.add(a,b)
        }
        else if(operation==="subtract"){
            return this.subtract(a,b)
        }
        else if(operation==="multiply"){
            return this.multiply(a,b)
        }
    }
};

console.log(calculator.calculate.call(calculator,"add",5,3))