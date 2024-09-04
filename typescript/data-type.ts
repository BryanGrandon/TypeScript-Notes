let variable: any;

// STRING -> It is used to represent a sequence of characters.

const string: string = "Way of writing string";
const backticks: string = `String Content ${variable}`;

// NUMBER -> It is used to represent both Integer as well as Floating-Point numbers.

const wholeNumber: number = 21;
const decimal: number = 20.4;
const hexadecimal: number = 0xa;
const binary: number = 0b1010;
const octal: number = 0o12;

// BIGINT

const bigInt: bigint = 12n;

// BOOLEAN -> Represents true and false.

const isTrue: boolean = true;
const isFalse: boolean = false;

// NULL -> It is used when an object does not have any value.

let isNull: null = null;

// UNDEFINED -> Denotes value given to uninitialized variable.

let isUndefined: undefined = undefined;

// ANY -> Any type of value can be assigned to it.

// VOID -> Generally used on function return-types

// ARRAYS

// TUPLES

// ENUMS

// OBJECT

// Elements cannot be added dynamically, they must be declared in the object itself.

const obj1 = { id: 13, name: "" };
obj1.name = "John";

const obj2: { readonly id: number; name: string; optional?: string } = {
  id: 1,
  name: "Sara",
};
