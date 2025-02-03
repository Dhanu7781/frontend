const obj ={
    name :" dhanu",
    age:23,

}

// const MapedValue = new Map();
// MapedValue.set("1" ,"dhanu")
// console.log(MapedValue);
// const keys =MapedValue.entries()
// console.log(keys);


// MapedValue.set(obj,["view","edit"])
// // console.log(MapedValue);
// const permissions =MapedValue.get(obj);
// console.log(permissions == `${["view","edit"]}`? true:false);
// console.log(typeof permissions);


// const setUniqueValue =  new Set(["dhanu","Don"])
// // setUniqueValue.delete("Don")
// console.log(setUniqueValue.size);
// const keys =MapedValue.keys();

// console.log(keys);
// processData;

// var processData = function() {
//     return 'hello';
//     };
    

   
// const createCounter = function () {
//     let count = 0;
//     return function () {
//         count++;
        
        
//         return count;
//     };
// };

// const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2



// function grandParent() {
//     const grandParentVar = "Grandparent";

//     function parent() {
//         const parentVar = "Parent";
//         // console.log(childVar); 

//         function child() {
//             const childVar = "Child";
//             console.log(grandParentVar); // Accesses variable from grandParent
//             console.log(parentVar); // Accesses variable from parent
//             // console.log(); // Accesses variable from child
//            return function()
//             {
//                 return childVar;
//             }
//         }

//         child();
//     }

//     parent();
// }

// const child =grandParent();
// console.log(child());


function createUser(name) {
    // New memory space for each call
    let userId = "user_" + Math.random();
    return { userId, name };
}

let user1 = createUser("John");
let user2 = createUser("Jane");
console.log(user1 , user2);




