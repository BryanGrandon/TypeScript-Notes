//  JAVASCRIPT //

//  Object. // Elements cannot be added dynamically, they must be declared in the object itself.
const obj1 = { id: 13, name: '' }
obj1.name = 'John'

const obj2: { readonly id: number; name: string; optional?: string } = {
  id: 1,
  name: 'Sara',
}

//  Function. // The `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime()
}
// Arguments
function add(a: number, b: number): number {
  return a + b
}
// Arrow function
const arrowFunction = (arg: number): number => {
  return arg + 1
}

// TYPESCRIPT //

//  Unknown. //  The use of unknown allows us to work with unknown values with type safety.
let x: unknown = 10
// let v1: number = x; //  Error
// let v2: object = x; // Error
// let v3: string = x; // Error
// let v4: string[] = x; // Error
// let v5: {} = x; // Error
// let v6: {} | null | undefined = x; // Error

// we define the type.
let v10: number = x as number // Ok

// It does not allow operations on the value until a specific type is defined.
function sum(a: unknown, b: number) {
  // checking the type
  if (typeof a === 'number') {
    return a + b
  }
  throw new Error(`Variable '${a}' is not a number`)
}
sum(10, 2) // 12
sum('hello', 2) // Variable 'hello' is not a number
sum({ a: 5 }, 2) // Variable [object Object] is not a number

// Never. // Never is used in the case of functions that we know will not return a value.
function throwError(errorMsg: string): never {
  throw new Error(errorMsg)
}
function keepProcessing(): never {
  while (true) {
    console.log('I always does something and never ends.')
  }
}

// Arrays.

const arrString: string[] = ['Lucas', 'John', 'Ricardo']
// ways to specify the data type to be contained in the array
const arrChecks: boolean[] = [true, false]
const arrChecks2: Array<boolean> = [true, false]

//  Tuples

let tuples: [string, number, boolean] = ['string', 21, true]

//  Enums

const person = {
  name: ' John',
  age: 21,
}
person.name = 'Jane'
person['age'] = 31

const personPropertiesObject = {
  NAME: 'name',
  AGE: 'age',
}
person[personPropertiesObject.NAME] = 'Jane'
person[personPropertiesObject.AGE] = 31

// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
enum personProperties {
  NAME = 'name',
  AGE = 'age',
}
person[personProperties.NAME] = 'Jane'
person[personProperties.AGE] = 31
