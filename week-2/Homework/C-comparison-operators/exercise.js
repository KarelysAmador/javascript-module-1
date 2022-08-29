/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors = studentCount > mentorCount;

/*function moreStudentsThanMentors (studentCount , mentorCount) {
    if (studentCount > mentorCount) {
    return true;
    } else false;
  }*/

// finish this statement

var roomMaxCapacity = 25;
var enoughSpaceInRoom = roomMaxCapacity >= moreStudentsThanMentors; // finish this statement

/*function enoughSpaceInRoom (roomMaxCapacity, moreStudentsThanMentors) {
      if (roomMaxCapacity >= moreStudentsThanMentors) {
        {
        return true;
        } return false;
    }
}*/

var personA = "Daniel";
var personB = "Irina";
var sameName = personA === personB; // finish this statement

/*function sameName (personA, personB) {
if (personA = personB) {
        {
        return true;
        } return false;
    }
}
*/
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/
