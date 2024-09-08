//  String.

// It is used to represent a sequence of characters.
let variable: string = "variable";
const string: string = "Way of writing string";
const backticks: string = `String Content ${variable}`;

// Inferred types
let stringInferredTypes = "Way of writing string";

//  Number.

// It is used to represent both Integer as well as Floating-Point numbers.
const wholeNumber: number = 21;
const decimal: number = 20.4;
const hexadecimal: number = 0xa;
const binary: number = 0b1010;
const octal: number = 0o12;

// Inferred types
let numberInferredTypes = 208;

//  BigInt.

let bigInt: bigint = 1293039238238n;

//  Boolean.

// Represents true and false.
let isTrue: boolean = true;
let isFalse: boolean = false;

// Inferred types
let booleanInferredTypes = true;

//  Null.

// It is used when an object does not have any value.
let isNull: null = null;

// Inferred types
let nullInferredTypes = null;

//  Undefined.

// Denotes value given to uninitialized variable.
let isUndefined: undefined = undefined;

// Inferred types
let undefinedInferredTypes = undefined;

//  Object.

// Elements cannot be added dynamically, they must be declared in the object itself.
const obj1 = { id: 13, name: "" };
obj1.name = "John";

const obj2: { readonly id: number; name: string; optional?: string } = {
  id: 1,
  name: "Sara",
};

//  Function.

// The `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

// The `: void` here specifies that this function does not return anything.
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}
greet("Alice");

// Arguments
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));

// Arrow function
const arrowFunction = (arg: number): number => {
  return arg + 1;
};
