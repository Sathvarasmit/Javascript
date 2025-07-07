// if else else if 
// switch case
// early return pattern
 

if (12>23) {
    
} 
else if(23>21)
{

}
else{

}

// That's how if elseif else work

// Switch case 

switch (3) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
}


// in this case 3 will work 
// and in this if i don't use break it will be not stop and it also print a case also that's why we write break.

// early return pattern 

function getVal(val) {
    if(val < 25) return "D";
    else if (val < 50) return "C";
    else if (val < 75) return "B";
    else return "A"
    }

console.log(getVal(30));

// IT MEANSE WHATEVER COMES FIRST IT WILL RETURN ALSO FIRST LIKE AT HERE 30 IS ALSO < 50 AND 75 


// practice questions

function getGrade(score) {
    if(score >= 90 && score <= 100) return "A+"
    else if (score >= 80 && score <= 89) return "B"
    else if (score >= 70 && score <= 79) return "C"
    else if (score >= 60 && score <= 69) return "D"
    else if (score >= 33 && score <= 59) return "E"
    else if (score >= 0 && score <= 32)
    return "fail"
    else return "invalid marks"
}

console.log(getGrade(5))

// you can also write like this

function getGrade(score) {
    if(score >= 90 && score <= 100) return "A+"
    if (score >= 80 && score <= 89) return "B"
    if (score >= 70 && score <= 79) return "C"
    if (score >= 60 && score <= 69) return "D"
    if (score >= 33 && score <= 59) return "E"
    if (score >= 0 && score <= 32)
    return "fail"
    else return "invalid marks"
}

console.log(getGrade(5))

// And also like this

function getGrade(score) {
    if(score >= 90 && score <= 100) {
        return "A+"
    }
    else if (score >= 80 && score <= 89){ return "B"
    }
    else if (score >= 70 && score <= 79){ return "C"
    }
    else if (score >= 60 && score <= 69) {
        return "D"
    }
    else if (score >= 33 && score <= 59) {
        return "E"
    }
    else if (score >= 0 && score <= 32){
    return "fail"
    }
    else return "invalid marks"
}

console.log(getGrade(5))



/* Rock Paper Scissor Logic */

function rps(user, computer) {
    if (user === computer) return "Draw"

    if (user === "rock" && computer === "scissors") return "user";
    if (user === "scissors" && computer === "paper") return "user";
    if (user === "paper" && computer === "rock") return "user";

    return "computer";
}

console.log(rps("rock", "scissors"))

// As you can see here we doesn't declare anything not rock nither scissors nor paper but they all are string at here and we also called them as string and using this we can pass values like we do here.