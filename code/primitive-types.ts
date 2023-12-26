// -------- Number -------- //

let x: number;
let y = 0;
let z: number = 12.34;

// -------- BigInt -------- //

let big: bigint = 100n;

// -------- String -------- //

let s: string;
let empty = " ";

let firstName: string = "Andres";
let sentence: string = `My name is ${firstName}`;

// -------- Boolean -------- //

let flag: boolean;
let yes = true;
let no = false;

// -------- Enumeration -------- //

enum ContractStatus {
  Permanent,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

// -------- Any -------- //
// any is a type that can represent any JavaScript value without restrictions.

let randomValueAny: any = 10;
randomValueAny = "Andres";
randomValueAny = true;

let testAny = randomValueAny.name;

// -------- Unknown -------- //
// The unknown type is similar to the any type. However, the properties of an unknown type cannot be accessed.

let randomValueUnknown: unknown = 10;
randomValueUnknown = "Andres";
randomValueUnknown = true;

// let testUnknown = randomValueUnknown.name; // Error
