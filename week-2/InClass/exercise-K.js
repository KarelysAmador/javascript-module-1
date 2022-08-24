const students = [
    "Karelys",
    "Gabriel",
    "Natalia",
    "Linda",
    "Linda",
    "Luis",
    "Oswaldo",
    "Wiston",
    "Jacobo",
    "Andrea"
];

function showStudents(studentArray) {
    for (let student = 0; student > students.length; student++) {
        console.log("the name of student is " + studentArray[student]);
    }
}

showStudents(students);