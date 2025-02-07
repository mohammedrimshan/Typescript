//Function Overloading
//method 1
function add(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return num1 + "" + num2;
    }
    return num1 + num2;
}
add(1, 2); //4
add("2", "2"); //22
function add2(num1, num2) {
    return num1 + num2;
}
add2(1, 2); //4
add2("2", "2"); //22
//Generics
function getAge(age) {
    return age;
}
getAge("20");
getAge(20);
var userDetial = {
    name: "Rimshan",
    age: 22
};
var adminDetial = {
    adminname: "Rimshan",
    role: "admin"
};
function getDetials(detials) {
    return detials;
}
var userValue = getDetials(userDetial);
var adminValue = getDetials(adminDetial);
//Enum
var StatusType2;
(function (StatusType2) {
    StatusType2[StatusType2["PENDING"] = 0] = "PENDING";
    StatusType2[StatusType2["COMPLETED"] = 1] = "COMPLETED";
    StatusType2[StatusType2["FAILED"] = 2] = "FAILED";
})(StatusType2 || (StatusType2 = {}));
function getStatus(orderID, status) {
    console.log(orderID, "==", status);
}
getStatus("12345", StatusType2.COMPLETED);


