/*
numeroCaracteres = variable.length
toUpperCase --> string.toUpperCase 
a user type. The function must:
take two parameters: one for the username and one for the user type
if the username starts with a capital letter and has length between 5 and 10 characters long, it must return "Username valid"; otherwise, it must return "Username invalid"
if the user type is an admin or a manager, all usernames must return "Username valid"*/

function checkValid(userName, userType) {
    if ((userName.length > 5 && userName.length < 10 && userName.charAt(0) === userName.charAt(0).toUpperCase()) && (userType === "admin" || userType === "manager")) {
        return "Username valid";
    } else {
        return "Username Invalid";
    }
}
console.log(checkValid("gabriel", "manager"));



/*const userVerify = (userName, userType) => {
    const userLength = userName.length;
    const firstChar = userName.charAt(0);

    if (userType === "admin" || userType === "manager") {
        return  "Username valid";
    }
    if (userLength > 5 && 
        userLength < 10 && 
        firstChar.toUpperCase() )
        {
        return "User valid"
    }

    else {
        return "User invalid"
    }
}

console.log (userVerify(3, "admin"));*/
