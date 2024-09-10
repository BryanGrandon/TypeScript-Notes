//  Any.

// Any type of value can be assigned to it.
// It is not recommended to use this type of data as it breaks the purpose of typescript.

let isAny: any = 21;
isAny = "string";

// Void.

// void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.
function sayHi(): void {
  console.log("Hi!");
}

// There is no meaning to assign void to a variable, as only null or undefined is assignable to void.
let nothing: void = undefined;
// let num: void = 1; // Error

//  Unknown.

// Using unknown allows us to work with unknown values with type safety, the two main characteristics of unknown are:
// It does not allow a variable defined as unknown to be assigned to another variable, thus avoiding the propagation of inconsistent data.
let x: unknown = 10;
// let v1: number = x; //  Error
// let v2: object = x; // Error
// let v3: string = x; // Error
// let v4: string[] = x; // Error
// let v5: {} = x; // Error
// let v6: {} | null | undefined = x; // Error

// we define the type.
let v10: number = x as number; // Ok

// It does not allow operations on the value until a specific type is defined.

function sum(a: unknown, b: number) {
  // checking the type
  if (typeof a === "number") {
    return a + b;
  }
  throw new Error(`Variable '${a}' is not a number`);
}
sum(10, 2); // 12
// Error
sum("hello", 2); // Variable 'hello' is not a number
sum({ a: 5 }, 2); // Variable [object Object] is not a number

// Never.

// The never type is used when you are sure that something is never going to occur.
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function keepProcessing(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}

// Arrays.

const arrString: string[] = ["Lucas", "John", "Ricardo"];
const arrNumber: number[] = [12, 23, 34];

// ways to specify the data type to be contained in the array
const arrChecks: boolean[] = [true, false];
const arrChecks2: Array<boolean> = [true, false];

//  Tuples

// Think of them as a way of connecting some data but with less syntax than a key-ordered object.
let tuples: [string, number, boolean] = ["string", 21, true];

//  Enums

const person = {
  name: " John",
  age: 21,
};

const personPropertiesObject = {
  NAME: "name",
  AGE: "age",
};

// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
enum personProperties {
  NAME = "name",
  AGE = "age",
}

// Component 1
person.name = "Jane";
person["age"] = 31;

// Component 2 Object
person[personPropertiesObject.NAME] = "Jane";
person[personPropertiesObject.AGE] = 31;

// Component 3 Enum
person[personProperties.NAME] = "Jane";
person[personProperties.AGE] = 31;
