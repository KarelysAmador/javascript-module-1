const students = ["Karelys", "Andrea", "Gabriel","Natalia","Linda"];

function showNames(array) {
    for (let student = 0; student < students.length; student++) {
        const studentMessage = "The name of students is " + students[student]
        console.log(studentMessage);
    }
}
showNames(students);