// there are three types of variable (let var and const)
// var a = 12; when we make var it's called declare when we give value to it we called it assign or initialize
// a = 12; this is called reassign
// var a = 312; this is called redeclared

// There are three type of scopes in javascript
// 1.Global    
// 2.Blocked
// 3.functional

// var — Function Scoped
// Scope: Limited to the function where it's declared, not block-scoped
// Can be redeclared and reassigned
// Hoisted (but initialized as undefined)

// let — Block Scoped
// Scope: Limited to the block {} where it's declared
// Can be reassigned, but not redeclared in the same scope
// Hoisted, but in a Temporal Dead Zone (cannot access before declaration)

// const — Block Scoped (like let)
// Scope: Limited to the block {}
// Cannot be reassigned and cannot be redeclared
// Must be initialized when declared
// Also hoisted with Temporal Dead Zone

//Temporal Dead Zone
//etlo erea je ma javascript ne khabar to che ke variable exist kare che pan e temne value nathi aapi sakto

// ex
// console.log(a);

// let a =12;

// it will show error cause we try to print our a before declaration
// it also work same with const but not var
// console.log(a)

// var a = 52;

// when we use var it doesn't show any error it shows undefined

/* hoisting */
// ek variable jyare bane tyare a be bhag ma choota pade che enu declaration top per jay che ane anu initiallization niche j rahe che jya hoy tya.

// let's see example for this 

// console.log(a)

// var a = 25;

//at you can see declaration will be var a = undefined first part who goes to top and rest who stay at down is a = 25; you can see here below how it will

// var a = undefined


// console.log(a)

// a =25;

// as you can see here cause var a goes up that's why when we run var it show undefind cause this part goes up first.
//now in let

// console.log(b)
// let b = 25;

// Uncaught ReferenceError: Cannot access 'b' before initialization
// it shows this error it means let can decalre undefined but it can't initialize cause let has one rule we can't run if we don't initialize let




// var->hoist->undefined
// let->hoist->no value
// const->hoist->no value

// exercise 

/*scopes*/


var x = 1;
{
    var x = 2;
}

console.log(x);

// answer is 2 cause var is function scoped so first var is global and then second is also global cause var not respect the braces{} so second var is overright the first one so it will be 2 

let a = 10; 
{
    let a = 20;
    console.log("inside", a);
}
console.log("oustside", a);

/*CONFUSIONS*/

if(true){
    var c = 5;
    let e = 9;
}
console.log(c)
console.log(e)

// script.js:83 Uncaught ReferenceError: e is not defined

// why this is happen cause var is block scoped but let is function scoped so cause there is curly braces let is not work

{
    let m = 90;
}
console.lot(m)

const person = {name: "smit"}
// person.name = "harsh" allowed
// person = {} not allowed

// why it means const give you authority for update smit harsh etc but not property(name)

