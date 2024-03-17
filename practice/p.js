/*var student1 = {
    name: "nafisa",
    age:34,
    class : 6,
}
console.log(student1.age);
*/


function me(name,age,gpa){
    this.name = name;
    this.age = age;
    this.gpa = gpa;
}

var u = new me("anisul",34,5);
console.log(u.age);
console.log(u.gpa);