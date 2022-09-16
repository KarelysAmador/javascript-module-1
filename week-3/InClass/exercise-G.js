/*Create a function which:
Takes an array of birthYears
Uses console.log to print the message These are the birth years of people who can drive: <filtered birth years>
Returns an array of people who can drive (remember, you can drive if you are 17 years or older)
*/
function getAge (birthYear) {
    return new Date().getFullYear() -birthYear
}

function getDrivingStatus(birthYear){
    const age = getAge (birthYear)

    if (age >= 17){
        return `Born in ${birthYear} can drive`;
    } else {
        const yearsToDrive = 17- age
        return `Born in ${birthYear} can drive in ${yearsToDrive} years` 
        }
    }

function printYear (canDriveText) {
    console.log(canDriveText)
}

const birthYears = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]
const drivingStatuses = birthYears.map(getDrivingStatus);
drivingStatuses.forEach(printYear)