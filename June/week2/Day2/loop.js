
// let age = prompt("Enter your age")
// // if-else statement
// if(age>=18){
//     console.log("He/She can eligible for voting");
// }
// else{
//     console.log("He/She can not eligible for voting");
// }



let stMark =40
if(stMark>=90){
    console.log("Grade A");
}
else if(stMark>=80){
    console.log("Grade B");
}
else if(stMark>=60){
    console.log("Grade c");
}
else{
    console.log("Fail");
}

//Trenary operator

let stage=16;
console.log(stage>=18 ? "can vote" : "can't vote" );

// let number = prompt("Enter a number")
// if(number%5==0){
//     console.log("Number is divigible by 5");
// }
// else{
//     console.log("Number is not divigible by 5");
// }

// let number = prompt("Enter a number")
// if(number% 0){
//      console.log("Number is a prime number");
//  }
//  else{
//      console.log("Number is not a prime number");
//  }

for(let i=1;i<10;i++){
    console.log(i);
}

console.log("This is whle loop");

let i=1
while(i<=5){
console.log(i);
i++;
}

console.log("Do while loop");

let n=1;
do{
    console.log(n);
    n++
}
while(n<=15)

//object
let obj={
    name:"xyz",
    age:30,
    phon:8926378746,
    email:"biswojitsahoo42@gmail.com"
}
console.log(obj.name);
console.log(obj.age);
console.log(obj["email"]);
obj.name="y"
console.log(obj.name);

let arr=[1,2,3,4,5,6];
console.log(arr);
console.log(typeof arr);

//for-in
for(const key in obj){
    console.log(obj[key]);
}

for(let idx in arr){
    console.log(arr[idx]);
}
console.log("for-of loop");

//for of
for(const e of arr){
    console.log(e);
}


let str="biswojit sahoo"
console.log("length is :", str.length);

console.log(str[0]);

//Interpollation of string
let c=20
console.log("value is :",(c+1));
console.log(`value is : ${c}+1`);