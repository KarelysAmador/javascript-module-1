
const array = ["Anton", "Gabriel", "Amy"];

function secondMatchesAmy(array) {
  if (array[2] === "Amy") {
    return "Second index matched!";
  } else

  return "Second index not matched";
}

console.log(secondMatchesAmy(array));