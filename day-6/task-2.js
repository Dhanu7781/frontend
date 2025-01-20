let globalVariable = "I am global";

// Task 2.2: Function Scope
function testFunction() {
    let functionVariable = "I am in function";
    console.log(globalVariable);      // Can access global
    console.log(functionVariable);    // Can access its own
}