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
