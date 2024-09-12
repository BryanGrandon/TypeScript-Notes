function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25); // OK
// numberArray.push("This is not a number"); // Error

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
// stringArray.push(30); // Error

// Interface Generic
interface Person {
  id: number;
  name: string;
}
interface Employee extends Person {
  role: string;
}
interface Product {
  id: number;
  name: string;
  price: number;
}
interface Data<T> {
  addItem(newItem: T): void;
}
//  Generics <T>
class DataCollection<T extends { id: number; name: string }>
  implements Data<T>
{
  private items: T[] = [];
  addItem(newItem: T): void {
    this.items.push(newItem);
  }
  getItems(): void {
    console.log(`List of items`, JSON.stringify(this.items));
  }
  getNames(): string[] {
    return this.items.map((item) => item.name);
  }
  getItemById(id: number): T | undefined {
    return this.items.find((item: T) => item.id === id);
  }
}
