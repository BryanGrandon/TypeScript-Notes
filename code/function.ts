// -------- Functions with Name -------- //

function addNumber_1(x: number, y: number): number {
  return x + y;
}
addNumber_1(1, 2);

// -------- Anonymous Functions -------- //

const addNumber_2 = function (x: number, y: number): number {
  return x + y;
};
addNumber_2(1, 2);

// -------- Arrow Functions -------- //

const addNumber_3 = (x: number, y: number): number => x + y;
addNumber_3(1, 2);

/** -------- Parameters -------- //
 *
 *  - Compulsory parameters: ( x: number, y:number )
 *
 *  - Optional parameters: ( x:number, y?:number )
 *
 *  - Predetermined parameters: ( x:number, y = 25 )
 *
 *  - Parameters of REST: (firstNumber:number, ...restOfNumbers: number[])
 *
 *  - Parameters of deconstructed object: ( {text, sender}: Message )
 *
 */

// -------- Definition of type of function -------- //

type calculator = (x: number, y: number) => number;

let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;
