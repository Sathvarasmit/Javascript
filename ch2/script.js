// Data Types
// There are two types of data types
// 1.premitive data type & 2.reference data type

// 1.premitive data type : avi badhi values ke jene copy karie to teni real copy made
// String, Number, bolean, null, undefined, Symbol, BigInt

// 2.reference data type : aane copy karva par real copy nathi madti pan reference madse parent nu
// Array Object function
//  []      {}      ()    

let a = 12;
let b = a;

a = a+2;

// answer a 14
// answer b 12

// this is happen cause it's premitive value 
// if there is a refrence value it won't work like this it also update the b 

let c = [1, 2, 3]
let d = c

d.pop()


// there are three types using that we can make string 
// 1."" Double quotes
// 2.'' Single Qoutes
// 3.`` Backticks 

// Null no matalab ke aapde hathe kari ne ane null value aapie
// agar aapde ak variable banaie ane ene value na aapie e jate j value lai le ena rite so it will be undefined


// symbol
// ## Simple Example:

// ```javascript
// const secret = Symbol("id");

// let user = {
//   name: "Smit",
//   [secret]: 123 // symbol-based hidden ID
// };

// // Someone accidentally does this:
// user.id = 999;

// // Let's see what happens:
// console.log(user.name);       // "Smit"
// console.log(user.id);         // 999 (string key)
// console.log(user[secret]);    // 123  (still safe)
// ```

// ---

// ##  What does the object look like now?

// ```javascript
// user = {
//   name: "Smit",
//   id: 999,               // string key
//   [Symbol("id")]: 123    // symbol key (hidden)
// }
//  Final Note:

// * `user.id` and `user[secret]` are **two separate things**
// * The secret ID (Symbol) is **not overwritten**
// * Loops and `Object.keys(user)` will **not show** the Symbol

// ---



// BIGINT

let E = 9007199254740991n;
E = E + 9n

//this is 9007199254740991 the max value we can write in integer if we want to write more than this and also want it's true so we have to use big int we have to do just put n behind that nubmer that's it.

// Dynamic Typing: js ma static typing nathi hoti ane ahiya dynamic typing hoy che matlab ke aapde data ne change kari sakie che kemke aa dynamic typing che na ki static

let u = 12;
u = true;
u = "smit";
u = []
u = null;

// it means it can be anything but in other languages it's not working like that like i will try to give one example is int i = 85; in this we clearly declared int but in js we assume let var const so that's why we called this dynamic typing.
// that's why they made typescript at there we can do code in static 

// type of quirks (typeof null = object , typeofNan = number)
// Quirk means weird unexpected answers OK


// Type coercion -> concept ke jema aapdo ek type automatically change thai jashe.

// in this if there are a + and the any one operand is string so it will make other also string. 
// in plus there is two options you can add or you can concatenate like here below.

// EX: "5" + 1
// the answer is '51' 

// but at - here is only one option you can only minus
// Ex : "5" - 1

// Truthy and Falsy Values

//0, false, "", null, undefined, NaN, document.all this all are falsy values 
// And the rest all is true
// you can check falsy values in console using !! this . EX !!0 it gives false

// practice of chapter 2
// Predict the result : true + false, null + 1, 5 + "5", !!undefined
// in this true meanse 1 and false is 0 so it will be 1
// null is 0 plus 1 it will also 1 
// 55
// false 

// what is difference between null and undefined null ne aapde declare karie che ane undefined jyare aapde value assign na karie tyare aave
// ex: let a; this will be undefined
// let e = null why we put null if you go to the atm until you not put card it is null when you put or swipe now it shows the details
