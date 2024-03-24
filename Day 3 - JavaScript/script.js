console.log("Hello");
var number = 225;
number = 10;
let number1 = 22;
number1 = 225;
const number2 = 45;

console.log(number2)


// string
let  name = "Psycho";

// float
let num1 = 3.14;

// boolean
let bool1 = true;
console.log(bool1)

let colors = ["red", "pink", "green", "blue"];

let profile = {
    name: "Hussnain",
    age: 20,
    cgpa: 3.2,
    isDrive: false,
    interestedIn: ["programming", "os"]
}
console.log(profile.interestedIn)


let numberr1 = 225;
let numberr2 = 25;
console.log(numberr1+numberr2);

let myAge = 18;
if (myAge > 18) {
    console.log("You can drive");
}
else if (myAge == 18) {
    console.log("You can or cannot drive")
}
else {
    console.log("You cannot drive")
}

function helloWorld(){
    console.log("Hello from function")
}

helloWorld();
helloWorld();

function sum(num1, num2) {
    console.log("Sum: ", num1+num2)
}

sum(25,2)
sum(225,10)

// for(let i = 1; i <= 1000; i++) {

//     console.log("Hello, Pakistan");
// }

// let i = 1
// while(i <= 1000) {
//     console.log("Hello, Pakistan");
// i++;
// }

let country = "I Love Microsoft";
console.log(country.replace("Microsoft", "Google"));


let data = ["psycho", 225, true]

console.log(data)
data.pop();
console.log(data)
data.push("Minion")
console.log(data)

// weather

try {
    console.log(num12)

}
catch(err) {
    console.log(err)
}

data[0] = "Hussnain"
console.log(data[0]);


