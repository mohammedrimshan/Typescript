//Infer types(Implicit type) - automatically detect type (when we give any invalid type , it only show in typescript , not in js becouse js is weekly/loosly type language)
var userName = "Rimshan";
var age = 22;
//Defining types (Explicit Types)
var usersName = "Rimshan";
var Age = 23;
var isTrue = true;
var skills = ["JS", "React", "node"];
var numbers = [1, 2, 3, 4];
var detials = {
    name: "rimshan",
    age: 22,
    status: true,
};
var PermanentDetails = {
    name: "rimshan",
    age: 22,
    status: true,
    getName: function () {
        console.log(this.name);
    }
};
PermanentDetails.getName();
