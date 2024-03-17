

// const car ={
//     name : "lan",
//     value:"2333",
// }
// document.getElementById('ro').innerHTML=car.name
// let base = prompt("enter the base");
// let height = prompt("enter the height");
// let area = base * height;
// document.write("area ="+ area);
//  let num = [10,20,30,40,50];
//  for(let i=0;i<5;i++){
//     document.write(num[i]);
//  }

//  function mysum(a,b){
//     return a*b;
//  }
//  let num1 = mysum(12,5);
//  document.write(num1);
// let num =[20,67,88,90,56];
// for(let i=0;i<5;i++){
// document.write(num.length);
// }
//creating object 
// const man ={
//     name: "werlan",
//     value:"345",
// }
// document.getElementById('ro').innerHTML=man.name
// const car ={
//         name : "jlan",
//         value:"2333",
//     }
//     document.getElementById('ro').innerHTML=car.name
function Sun (name,gpa,roll){
    this.name=name;
    this.gpa=gpa;
    this.roll=roll;
}
let s1= new Sun("Nafisa",3.78,678);
document.getElementById('ro').innerHTML=s1.name


let numofwin =0;
let numoflost =0;
for(let i=0;i<5;i++){
    let guessnum = prompt("enter the number");
    let randomnum = Math.floor(Math.random()*5)+1;
    if(guessnum==randomnum){
        document.write("You have won");
        numofwin++;
    } else{
        document.write("You have lost");
        numoflost++;
    }
}
document.write(numofwin+"<br>");
document.write(numoflost);