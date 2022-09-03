/*Exercise B (10 minutes)
Use the array of the people from your class
Combine it with another array filled with the names from another class
console.log the names in alphabetical order
Create a function that takes a name and an array of names and returns a string. 
If the name is not in an array, it should return <name> is not at the class with <people in the array>. 
If the name is in the array, it should return <name> is at the class with <people in the array></people>*/

const students = ["Karelys", "Andrea", "Luis", "Natalia"]; 
const students2 = ["Jacobo", "Graciela", "Oswaldo", "Miguel"];

const allStudents = students.concat(students2);
console.log(allStudents.sort());

function name (person, students){
    if  (students.includes(person) ) {
        return person + " is at the class with " + students;
    } else {
        return person + " is not at the class with " + students;
    }
}
console.log(name("Jacobo", students));