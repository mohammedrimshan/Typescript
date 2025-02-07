//Function Overloading

//method 1
function add(num1:number|string,num2:number|string):number|string{
   if(typeof num1 ==='string'||typeof num2 === 'string'){
    return num1+ "" +num2;
   }
    return num1+num2
}

add(1,2) //4
add("2","2") //22

//method 2
//method overload
function add2(num1:string,num2:string):string;
function add2(num1:number,num2:number):number;
function add2(num1:any,num2:any):any{
     return num1+num2
 }
 
 add2(1,2) //4
 add2("2","2") //22


 //Generics

 function getAge<T>(age:T): T {
    return age;
 }

 getAge<string>("20");
 getAge<number>(20);

 type UserDetial = {
    name:string;
    age:number;
 }
 type AdminDetial = {
    adminname:string;
    role:string;
 }

 const userDetial:UserDetial = {
    name:"Rimshan",
    age:22
 }

 const adminDetial:AdminDetial = {
    adminname:"Rimshan",
    role:"admin"
 }

 function getDetials<T>(detials:T):T{
    return detials;
 }

 const userValue = getDetials<UserDetial>(userDetial);
 const adminValue = getDetials<AdminDetial>(adminDetial);

//Enum

enum StatusType2 {
    PENDING,
    COMPLETED,
    FAILED
}

function getStatus(orderID:string,status:StatusType2){
    console.log(orderID,"==",status);
}

getStatus("12345",StatusType2.COMPLETED);

//Typecasting

//as const 

let fullname = "rimshan" as const ;
fullname = "rimshan"

//keyof typeof

const userRoles = {
    admin: "Administrator",
    user: "Regular User",
    guest: "Guest User",
  };

  type RoleKeys = keyof typeof userRoles;

let role1: RoleKeys = "admin";
let role2: RoleKeys = "guest"; 
