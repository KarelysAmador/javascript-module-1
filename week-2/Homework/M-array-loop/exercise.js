/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function weekdays (daysOfWeek) {
  const result = daysOfWeek.filter ( (day) => day.startsWith("T"))
  return result
}
console.log(weekdays(daysOfWeek))