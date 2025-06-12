// //This is function declaration
// function print(){
//     console.log("This is my function");
// }
// //this is function invocation /calling
// print()

// //expression function
// let printQlith=function(){
//     console.log("This is my expression function");
// }
// printQlith()

// //function with parameters
// let add = function(a, b){
//     return a+b;
// }
// let sum=add(10,20)
// console.log(sum);

// let sub=()=>{
//     console.log("Thisis my arrow function");
// }
// sub()

// //Higher order function
// function hof(a,b,task){
//     return task(a,b)
// }
// let addNum=hof(10,20,(x,y)=>{
//     return x+y;
// })
// console.log(addNum);

// // let newString=prompt("Enter some string:");
// function checkVowel(str){
//     let newStr=str.toLowerCase();
//     let count=0;
//     // for(let e of newStr){
//     //     if(e === "a" || e === "e" || e === "i" || e === "o" || e === "u"){
//     //         count++;
//     //     }
//     // }
//     for(let e of newStr){
//         if ("aeiou".includes(e)){
//             count++
//         }
//     }
//     return count;
// }
// console.log("No of vowels is:",checkVowel(newString));


let arr=[1,2,3,4,5,6,7,8,9]

arr.forEach((v,idx,arr)=>{
    console.log(`In index ${idx} value is :${v} array is :${arr}`);
})



let strArr=["pagal","dasu","bakadi","choro","sabyasachi","biswojit"]
let countStartWithS=0

strArr.forEach((v)=>{
    if(v.startsWith("s")){
        countStartWithS++;
    }
})
console.log("ans is :",countStartWithS);


// this is map function
let numArr=[1,2,3,4,5]

let modifiedArr = numArr.map((v)=>{
    return v+1;
})
console.log(modifiedArr);

//filter method
let filterData=numArr.filter((v)=>{
    return v%2===0;
})
console.log(filterData);

//this is reduce method
let sumOfNumber=numArr.reduce((accu,curr)=>{
    return accu+curr;
},0)
console.log("sum is:",sumOfNumber);

let marksOfStudent=[60,30,80,40,50];

//Queation 1
let affterFilter = marksOfStudent.filter((e)=>{
    return e>=50;
})
console.log(affterFilter);
//Queation 2
let n=prompt("Enter a number");

let from1toN=[];
for(let i=0;i<=n;i++){
    from1toN.push(i);
}
console.log(from1toN);

let sumFrom1toN = from1toN.reduce((accu,curr)=>{
    return accu+curr;
})

let multiFrom1toN=from1toN.reduce((accu,curr)=>{
    return accu*curr;
})
console.log("sum is :",sumFrom1toN);
console.log("multiplication is :",multiFrom1toN);