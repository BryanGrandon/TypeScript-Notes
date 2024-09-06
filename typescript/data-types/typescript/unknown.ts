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
