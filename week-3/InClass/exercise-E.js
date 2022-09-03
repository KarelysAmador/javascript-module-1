/*Create a function that takes a birthYear, and returns the age of someone
You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. Take this array and create another array containing their ages.
console.log the birth years array*/

/* para calcular año actual  
const moonLanding = new Date();
console.log(new Date().getFullYear());*/

function age(birthYear){
    return new Date().getFullYear() -birthYear
}

birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
let ages = birthYear.map(age)

console.log(ages)