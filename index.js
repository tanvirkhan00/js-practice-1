// Problem-1: Convert Temperature From Celcius To Farenhite

function tempareture (x) {
    let farenhite = (x*9/5)+32 ;
    return farenhite ;
}
let temparetureResult= tempareture(5);
console.log (temparetureResult);


// Problem-2: Claculate The Average Of Three Numbers 

function numbers (x,y,z) {
    let averageValue =(x+y+z)/3 ;
    return averageValue ;
}
let averageResult = numbers(5,3,8);
console.log (averageResult);


// Problem-3: Check If a Number is Positive, Negative or Zero

function number (x) {
    if (x>0) {
        return 'Number is Positive'
    }
    else if (x<0) {
        return 'Number is Negative'
    }
    else {
        return 'Number is Zero'
    }
}
let checkNumber =number (0) ;
console.log(checkNumber);


// Problem-4: Determine whether a character is a vowel or consonant

function character (x) {
    if (x=='a' || x=='e' || x=='i' || x=='o' || x=='u') {
        return 'Character is Vowel Alphabet'
    }
    else {
        return 'Character is Consonent Alphabet'
    }
}
let characterCheck =character('e');
console.log (characterCheck);


// Problem-5: Determine the season based on the month 

function season(x) {
    if (x>0 && x<=2) {
        return "Spring Season"
    }
    else if (x>2 && x<=4) {
        return "Summer Season"
    }
    else if (x>4 && x<=6) {
        return "Rainy Season"
    }
    else if (x>6 && x<=8) {
        return "Autumn Season"
    }
    else if (x>8 && x<=10) {
        return "Late Autumn Season"
    }
    else if (x>10 && x<=12) {
        return "Winter Season"
    }
    else {
        return "Unknown Season"
    } 
}

let checkSeason =season (10) ;
console.log (checkSeason);


// Problem-6:  Determine the day of the week based on a given number

function week (x) {
    if (x==1) {
        return "Saturday"
    }
    else if (x==2) {
        return "Sunday"
    }
    else if (x==3) {
        return "Monday"
    }
    else if (x==4) {
        return "Tuesday"
    }
    else if (x==5) {
        return "Wednesday"
    }
    else if (x==6) {
        return "Thursday"
    }
    else if (x==7) {
        return "Friday"
    }
    else {
        return "Unknown Day"
    }
}
let checkDay =week(0) ;
console.log (checkDay);


// Problem-7: Check if a given character is an alphabet, digit, or special character.

function character (x) {
    if ((x>='a' && x<='z') || x>='A' && x<='Z') {
        return "Character is Alphabet"
    }
    else if (x>=0 && x<=9) {
        return "Character is Digit"
    }
    else {
        return "Character is Special"
    }
}
let checkCharacter =character ('T');
console.log (checkCharacter);


// Problem-9: Calculate the sum of numbers from 1 to 5 using for loop.

function sumArray (array) {
    var sum =0 ;
    for (var i= 0; i < array.length; i++) {
        sum =sum+array[i] ;
    }
    return sum ;
}
let numbers2 =[1,2,3,4,5] ;
let totalSum =sumArray (numbers2);
console.log (totalSum);









