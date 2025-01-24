
const obj = {
    nameOfDirecoter:"Sandeep Reddy Vanga",
    movie:"Animal",
    actors:["randeer","rasmika","bhabi del"]
}
console.log(obj);


let obj1 = {}

obj1.name = "Dhanu";
obj1.from = "Rayadurgam";


console.log(obj1);

let obj2 = Object.create(obj)
obj2.ownName = "dhanunjaya"

console.log(obj1 , obj2 , obj);
