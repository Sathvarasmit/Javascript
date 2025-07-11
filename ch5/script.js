// Chapter 5
// loops
// repeat karavane ne loop kehvay che

// kaha se jana hai ->  kaha tak jana hai -> kaise jana hai 
// for

// kaha se jana hai -> kab rukna hai -> kaise jana hai 
// while 

// there is difference between kaha tak jana hai and kab rukna hai

// for use when you have clarity about where it ends like this 
// 1 - 40 for 
// 20 - 40 for 
// run until comes hello world - while 
// run until harsh will not come - while 

// for 1-100
// in this mostly people use i,j,k for variable name

// for (start; end; change){
//     // console.log()write whatever you want to print in loop  
// }

// for (let i = 0; i < 101; i++) {
//     console.log(i);   
// }

// start 
// while (end) {
//     // code
//     change
// }

// let i = 1;
// while (i <= 32) {
//     console.log(i);
//     i++
// }

// do {
    
// } while (end);

// let j=6;
// do {
//     console.log(j)
//     j++
// } while (j<5);

//  as you can see here 6 is not less than 5 but still it shows 6 then it stop
// this is the feature of do while it will run at least one time. doesn't matter condition is true or false

// Break and Continue

// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     if (i > 21) {
//         break;
//     }
// }   

// so it means when 21 comes loop will stop there.

// for (let k = 0; k < 50; k++){
//     if (k === 10) {
//         continue
//     }
//     console.log(k)
// }

// it will skip that value which had a continue keyword like you have a 123 and in condition 2 had a continue so output will be a 1, 3 

// Practice questions
// Q.1 Print number from 1 to 10 using a for loop.

// for (let i = 1; i <= 10; i++) {
//     console.log(i)    
// }

// Q.2 Print number from 10 to 1 using a while loop.
// let i = 10
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// Don't do mistake in normal you do > but at here you have to go opposite dirct 10 to 1 and when you use > less than here it stop cause it checks 10 < 1 no it is bigger than 1 so it not runs that's why you have to use here >

// Print even numbers from 1 to 20 using for loop

for (let i = 0; i <=20; i++) {
    if (i%2 === 0) {
        console.log(i)
    }
        
}

// Print odd numbers from 1 to 15 using while loop
let j = 1
while (j <= 15) {
    if (j%2 === 1) {
        console.log(j)    
    }
    j++;
}

// At here when devide 1/2 it gives you reminder so when your answer is comes 1 meanse reminder so it will print odd number cause every odd number reminder 1 when you devide with 2.

// if your browser stuck just copy that url and paste into another tab

// Q.5 Print the multiplication table of 5 (i.e., 5*1 = 5 ... 5*10=50)

// for (let k = 0; k<=10; k++) {
//         console.log(5*k)   
// }

for (let k = 0; k<=10; k++) {
    console.log(`5 * ${k} = ${5 * k}`)   
}

// Q.6 Find the sum of numbers from 1 to 100 using a loop

let sum = 0;
for (let j = 1; j <= 100; j++) {
    sum = sum + j  
}
console.log(sum);

// Some thing which we have to understand first we can't write j + sum = sum we have write this like this 
// At here sum is hold the value previous one untill new come
// And the main thing if we write console.log in the braces it will not stop but at here we want final answer so we have to write this out of braces

// Q7 Print all numbers between 1 to 50 that are divisible by 3

for (let i = 0; i <= 50; i++) {
    if (i%3 === 0) {
        console.log(i)
    }    
}


// Q 8 Ask the user for a number and print whether each number from 1 to that number is ever or odd

// let val = prompt("Give the value")

// for (let i = 1; i <= val; i++) {
//     if (i%2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
    
// }

// Q9 Count how many number are divisible by 3 or 5

for (let i = 0; i <= 100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log(i)
    }
    
}

// Q1 Stop at first multiple of 7
// Write a loop from 1 to 100 to that:
// Print each number
// Stop when it find first number divisible by 7

for (let i = 0; i <= 100; i++) {
    console.log(i)
     if (i === 7) {
        break;
     }
}

// In this if you write console.log befor the if so it will stop on 7
// but if you write after that so it just stop at 6
// Why cause when you write first means before if it take 7 then it show condition and stop but when you write after if it checks first 

// Q2 Skip multiples of 3 

// write a loop of 1 to 20 that
// skips number divisible by 3 
// and print other numbers

// use continue

// Expected output 
// 1 2 4 5 7 8 10 ....


for (let i = 0; i <= 20; i++) {
    if (i%3 === 0) {
        continue
       
    }
    console.log(i)
    
}

// Q 3 Print First 5 odd numbers only


// write a loop from 1 to 100 that 

// prints only 5 odd numbers 
// then stops the loop

// use both if continue and a counter + break

// Expected output 
// 13579


let count = 0;
for (let i = 0; i <= 100; i++) {
    if (i%2 === 1) {
        count++;
        console.log(i)
       
    }
    if(count === 5) break;
}

// As we can see here count what count does is first count is 0 then count ++ means 1 then 2 then 3 whenever come 5 it will stop 

// Prompts for chatgpt

// practice of loops on chatgpt
// ask for 10 questions of loops
// Tommorow daily we are gonna solve 5 questions of loops after that we are going to add step by step

