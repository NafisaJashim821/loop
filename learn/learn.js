// let x = document.getElementsByTagName('h1');
// document.getElementById('demo').innerHTML="hii"+x[1].innerHTML;
// document.getElementById('hi').innerHTML=Date();
// document.getElementById('click').addEventListener=('click'function())
// a=45;
// b=79;
// a>b?document.write('a is big'):a===b?document.write('equal'):document.write('b is big')
// let car = ["Saab", "Volvo", "BMW","lan"];
// for(let i=0;i<4;i++){
//     document.write(car[i]);
// }
// let x = document.getElementsByTagName('h1');
// document.getElementById('demo').innerHTML="hii"+x[1].innerHTML;
// document.getElementById('hi').innerHTML=Date();
// document.getElementById('click').addEventListener=('click'function())
// a=45;
// b=79;
// a>b?document.write('a is big'):a===b?document.write('equal'):document.write('b is big')
// let car = ["Saab", "Volvo", "BMW","lan"];
// for(let i=0;i<4;i++){
//     document.write(car[i]);
// }



let car = ["saab", "volvo", "bmw","lan"];
console.log(car);
car.shift();
console.log(car);

car.unshift("nafisa");
console.log(car);
car.pop();
console.log(car);
car.splice(1,0,"nala","para");
console.log(car);

// let newArray = car.slice(1);
// console.log(newArray);
// let suv = car.sort();
// // car.reverse();
// console.log(suv);

// let num = [30,5,25,45,7];
// num.sort(function(a,b){
//     return a-b;
// });
// console.log(num);

// function Noon (name,age,gpa,height){
//     this.name = name;
//     this.age=age;
//     this.gpa=gpa;
//     this.height=height;
// }
// let day1 = new Noon1("jaein",76,3.00,5.67);
// let day2 = new Noon2("nisha",55,3.90,4.67);
// console.log(Noon1.age);
// console.log(Noon2.height);


function Noon (name,age,gpa,height){
    this.name = name;
    this.age=age;
    this.gpa=gpa;
    this.height=height;
}
let d1 = new Noon("jaein",76,3.00,5.67);
let d2 = new Noon("nisha",55,3.90,4.67);
console.log(d1.age);
console.log(d2.height);

let person = {name:"jon",age:56,gpa:3.50}
for(let x in person){
    console.log(person[x]);
}
function isBestFriend(person1, person2) {
    // Check if person1 is the best friend of person2 and vice versa
    return person1.friend === person2.name && person2.friend === person1.name;
}

// Sample data
const person1 = { name: "abul", friend: "babul" };
const person2 = { name: "babul", friend: "abul" };

// Test the function
const result = isBestFriend(person1, person2);

// Display the result
console.log(result); // Output: true
