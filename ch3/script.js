// Arithmetic, comparison, logical, assignment, unary, ternary

/* + - * / % **                         Arithmetic
== === < > <= >= != !==                 Comparison
 ! && ||                                  Logical
= += -= *= /= %=                        Assignment
+ - ! typeof ++ --                        unary 
?:                                       ternary   */


// Arithmetic

// 1 + 2 = 3
// "smit" + "sathvara" = "smit sathvara"

// 12 - 2 = 10

// 12 / 2 = 6

// 12 * 2 = 24

// 12 % 5 = 2 Module 

// 3 ** 2 = 9

// Comparison

// 2 == 3  false 
// 2 == "2" true  cause it's not check type | this is not strict
// 2 === "2" false it also check type | this is strict

// 2 != 1 true
// 2 != "2" false cause it's not strict it's not check type  | not equal
// 2 !== "2" true cause it also check type now one number and one is string  |not equal equal

// 12 > 10 true
// 12 < 30 true
// 12 >= 12 true
// 30 <= 30 true


// Assignment

let f = 10; //in this equals to is assignment means f's value is 52
f+=3
f-=1
f*=2
f/=3
f%=2

// in this back always hold the value like when you do f+=3 it will be 13 then f-=1 now 12 then f*=2 24 the cycle runs until it over

// Logical 

// AND

// TRUE && TRUE ANSWER WILL BE TRUE
// TRUE && FALSE  FALSE
// FALSE && TRUE FALSE
// FALSE && FALSE FALSE

// IF BOTH IS TRUE ONLY THEN ANSWER IS TRUE OTHERWISE FALSE 

// THIS IS A AND OPERATOR

// OR
// TRUE || FALSE TRUE
// FALSE || TRUE TRUE
// TRUE || TRUE TRUE
// FALSE || FALSE FALSE

// NOT

// !FALSE TRUE
// IF YOUR ANSWER IS FALSE AND YOU PUT ! IT WILL BE TRUE NOW cause it means not not false yes true

// Unary operator 
// this operators are only applicable on single values 
// +"10" it will be a 10 now it's trick | If you use string and it can be conver in number just write + so itwill convert to number but if you use this "smit" and write + before like this +"smit" it will be now NaN

// if you have a number and you want to make nagetive to it just write -

// ! it means not see. in logical operators

// typeof it shows type of whatever you write it will show type of that.

// ++ it increases one 
// -- it decreses one

// in increse there are two types of increment pre increment and post increment ++a a++ 
// in decrement there are also two types pre decrement and post decrement --a a--

// in pre increment let's see example
// let a = 5;
// ++a
// it first increse and then print so answer will be a 6
// a++
// but in post increment it first print answer what it is 5 and whenever you print a again it will print 6


// Ternary

// condition ? (if it's true then this) : (it it false then this)

52 >= 50 ? console.log("true") : console.log("false")

// tyepof instanceof

// typeof null is object which is wrong but this is what js gives the answer when you write typeof null

// typeof [] it means array type of array is object

// type of NaN not a number is number 

// so these are some wrong types it also called quirks

// Instanceof this operator is use for to know real type of some data types which is given wrong from javascript 

// Meaning of instance means connected with or birth from that 

// let t = []
// EX :t instanceof Array means t is connected from array it will give true
// cause if we check this using typeof it will say object which is not 
// in this you have to write capital like as given in language as like that

// instanceof will work on reference values and typeof will work on premitive values.

// practice questions

let x = 10
let y = 30

if (x > 5 && y < 40) {
    console.log(true)
} else {
    console.log(false);
    
}

let isAdmin = true
let isLoggedIn = false

if (isAdmin || isLoggedIn) {
    console.log("Access Granted")
} else {
    console.log("Acess Denied");
}

let speed = 180

if (!(speed<200)) {
    console.log("Right speed");
} else {
    console.log("Overspeeding");
}

// just see like this if condition is true and then it false it will go in else 
// and if condition is false but then it will become true using not it will go in if

let isRaining = false;

if (!isRaining) {
    console.log("Go outside!");
} else {
    console.log("Take an umbrella.");
}

let a = 0

if (a) {
    console.log("true")
} else {
    console.log("false")
}
// it shows nature of that value truthy or falsy you can check using !!0 like this

let score = 89
let grade = score >= 90 ? "A" : score >= 60 ? "B" : score >=33 ? "c" : "fail";
console.log(grade)



let points = 50;
let medal = points >= 90 ? "Gold" : points >= 60 ? "Silver" : "Bronze";
console.log(medal);

let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allowed" : "Denied";
console.log(access);

// let a = 5;
// console.log(a++);  // 🔥 This prints 5, then a becomes 6
// let a = 5;
// a++;               // This increments it (a becomes 6)
// console.log(a);    // So this prints 6

let p = 3;
let o = p++;
console.log(p, o) //(4, 3)
// cause post increment at first time not prints whenever you write again it will print there so that's p is 4 and o is 3  

let u = 9;
let i = ++u;
console.log(u, i); //(10, 10)

let l = 5;
let result = l++ + ++l
console.log(l) // Answer is 12 how cause first l++ it should be 5 then ++l so it will be instantly 6 then cause it prints again it will be 7 now.

let likes = 101;

function likepost() {
    return ++likes;
}

console.log(likepost());
console.log(likes);

let count = 10;

if (count-- === 10) {
    console.log("matched");
} else {
    console.log("not matched");
}

