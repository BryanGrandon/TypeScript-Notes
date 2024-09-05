// Elements cannot be added dynamically, they must be declared in the object itself.

const obj1 = { id: 13, name: "" };
obj1.name = "John";

const obj2: { readonly id: number; name: string; optional?: string } = {
  id: 1,
  name: "Sara",
};
