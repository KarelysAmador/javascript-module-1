
function calculateBornYear (age) {
    return 2022 - age;
}
const result= calculateBornYear(33);
console.log (result);


function getPersonalInformation (name, age) {
    const bornAge = calculateBornYear (age);
    return "My name is " +name + " and I was born in " + calculateBornYear(age);
}

const greeting= getPersonalInformation ("Juan", 33);
console.log (greeting);



/* Ejemplo --- 
function getCurrentYear (){
    const date= new Date; **el Date debe tener la D en mayus para que Java Script la reconozca**
    return date.getFullYear()
}


ejemplo 2 --- function getAgeInDays(age) {
  return age * 365;
}

function createGreeting(name, age) {
  const ageInDays = getAgeInDays(age);
  const message =
    "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
  return message;
}

console.log (createGreeting("Lorena", 42));*/
