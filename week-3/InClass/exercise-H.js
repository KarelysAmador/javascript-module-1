/*Create a function which:
Takes an array of names
Looks to see if your name is in the array
If it is, return Found me!; if not, return Haven't found me :( */
const names= ["Linda", "Andrea", "Litzy", "Kare", "Luis"];

function nameList (names){
      if (names.find(nombre=> nombre === "Ali")){
    return `Found me!`;
    } else {
        return `Haven't found me :( ` 
        }
}

console.log(nameList(names));