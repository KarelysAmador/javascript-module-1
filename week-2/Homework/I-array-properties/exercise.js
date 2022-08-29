/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

function isEmpty(numbers) {
  if (numbers.length === 0){
  return "true"; // complete this statement
} else if (numbers.length >= 1) {
  return "false";
}
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/
