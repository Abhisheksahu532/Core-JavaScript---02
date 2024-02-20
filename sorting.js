const ages = [19,22,19,24,20,25,26,24,25,24]
//sort the ages
ages.sort((a,b)=>a-b)

//find min and max ages
let minAge=ages[0]
let maxAge=ages[ages.length-1]

//find the median
let mid=Math.floor(ages.length/2)
let median;
if(ages.length%2==0){
    median=(ages[mid-1]+ages[mid])/2
}
else{
    median=ages[mid]
}

//find avg of ages
let sum=0
for(let i=0;i<=ages.length-1;i++){
    sum +=ages[i]
}
let avg=sum/ages.length

//find the range of age
let ageRange=maxAge-minAge

//compare the vales
let compare=Math.abs((minAge-avg)-(maxAge-avg))


console.log(ages)
console.log(minAge)
console.log(maxAge)
console.log(median)
console.log(avg)
console.log(ageRange)
console.log(compare)

