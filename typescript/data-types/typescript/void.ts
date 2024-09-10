// void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.

function sayHi(): void {
  console.log("Hi!");
}

// There is no meaning to assign void to a variable, as only null or undefined is assignable to void.
let nothing: void = undefined;
// let num: void = 1; // Error
