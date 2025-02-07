//Infer types(Implicit type) - automatically detect type (when we give any invalid type , it only show in typescript , not in js becouse js is weekly/loosly type language)
let userName = "Rimshan";
let age = 22;

//Defining types (Explicit Types)

let usersName: string = "Rimshan";
let Age: number = 23;
let isTrue: boolean = true;
let skills: string[] = ["JS", "React", "node"];
let numbers: number[] = [1, 2, 3, 4];
let detials: { name: string; age: number; status: boolean } = {
  name: "rimshan",
  age: 22,
  status: true,
};


//Interface

interface Details  {
    name:string;
    age:number;
    status:boolean;
    getName: () => void;
}

let PermanentDetails: Details  = {
    name: "rimshan",
    age: 22,
    status: true,
    getName() {
        console.log(this.name)
    }
  };

  PermanentDetails.getName(); 

  //Type 

  type MyDetials = {
    name:string;
    age:number | string;
    status:boolean;
    getName?: () => void;
  }

  let tempDetails: MyDetials  = {
    name: "rimshan",
    age: 22,
    status: true,
    getName() {
        console.log(this.name)
    }
  };

  tempDetails.getName?.();


  //Union/Optional
  let mix : (number|string)[] = ['hello','happy',67,56]


//functions
type MyDetial = {
    name:string;
    age:number | string;
    status:boolean;
    getName?: () => void;
  }

  let tempDetail: MyDetial  = {
    name: "rimshan",
    age: 22,
    status: true,
    getName() {
        console.log(this.name)
    }
  };

function getUserName(userDetial:MyDetial):string{
    return userDetial.name;
}

const newValue = getUserName(tempDetail)
newValue.toUpperCase()
console.log(newValue)


//Named Types
type StatusType = "Pending" | "Completed" | "Failed"

let currentStatus:StatusType = "Completed"