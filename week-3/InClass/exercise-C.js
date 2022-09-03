function convertToMayus(array) {
  return array.map(string => string.toUpperCase())
}

function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}
/*const magician2=(nombre, año) => {
console.log (
  
)
}
*/
console.log(magician(convertToMayus));
