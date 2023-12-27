// variable
const PI = 3.14;

// interface
interface Person {
  id: number;
  name: string;
}

// function
function getNumberRandom(): number {
  return Math.floor(Math.random() * 100);
}

export { PI, Person, getNumberRandom };
