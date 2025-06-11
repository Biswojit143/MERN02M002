//operators
//Arrithmetic Operator
// Addition (+)

let a=5;
let b=30;

console.log(a+b); // 50
console.log(a-b); // -10
console.log(a*b); // 600
console.log(a/b); // 0.16666666666666666

console.log(a%2); //1
console.log(a**2); //25

console.log(a++); //5
console.log(++a); //7

console.log(b--); //30
console.log(--b); //28

console.log("string"+30); //string30
console.log(30+30+"string"+30); //60string30
console.log(true+"string"); //truestring
console.log(+"text"); //NaN
console.log(typeof +"text"); //number

//Comparision Operator
let st1="xyz";
let st2="xyz";
console.log(st1==st2);
console.log(st1===st2);

let n1="20";
let n2=20;
//normal comparision
console.log(n1 == n2);
//strict comparision
console.log(n1 === n2);

let f=3;
console.log((2<4) && (f++<5));
console.log(f);

let g=3;
console.log((2<4) || (f++>5));
console.log(g);

console.log(!false);
console.log(!true);

console.log("Hello")

console.log(1 !== "1");

//let = "true"
console.log(true !== "true");

console.log("a"-1);

let x=2
let y=a++
console.log(x,y);
// console.log("**********************************************");
console.log(0 == '');
console.log(0 === '');
// console.log("**********************************************");
console.log(!! "");



