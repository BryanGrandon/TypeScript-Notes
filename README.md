# TypeScript Notes

TypeScript is an open source language developed by Microsoft. It is a superset of JavaScript. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

```bash
npm install -g typescript
```

## Table of content

- [The TypeScript compiler.](#the-typescript-compiler)
- [Data types](#data-types)
- [Type](#type)
- [Interfaces](#interfaces)
- [Classes](/typescript/class.ts)
- [Generic](#generic)

## The TypeScript compiler

What this compiler actually does is to transpile, since neither the browser nor Node.js can natively read TypeScript files, so it performs a translation process in which your code is converted to JavaScript.

```bash
tsc script.ts
```

- Observer mode is used in Typescript to automatically compile changes whenever we make a change to a file.

  ```bash
    tsc script.ts -w
  ```

  To have the observer mode in all typescript files so that they are compiled automatically. The first thing to do is to initialize the project with typescript

  ```bash
  tsc -init
  tsc -w
  ```

## Data types

Since typeScript is a superset of javaScript it has the same data types only typeScript adds new ones.

- [JavaScript types](/typescript/data-types/javascript-types.ts)

  - String.
  - Number.
  - Boolean.
  - Null.
  - Undefined.
  - Object.
  - Function.

- [The data types added by typescript](/typescript/data-types/typescript-types.ts)
  - Any
  - Void
  - Unknown
  - Never
  - Arrays
  - Tuples
  - Enums

## [Type](/typescript/type.ts)

Type aliases don’t define new types; instead, they provide an alternative name for an existing type. Type aliases can be created using the type keyword, referring to any valid TypeScript type, including primitive types.

```ts
type Programmer = {
  name: string;
  technology: string[];
};
```

## [Interfaces](/typescript/interfaces.ts)

In TypeScript, an interface defines a contract that an object must adhere to.

```ts
interface Client {
  name: string;
  address: string;
}
```

## [Classes](/typescript/classes.ts)

- They exist at compile time and during runtime.
- We can initialize properties and implement methods
- Create instances of such a class

### Access control keywords

| Access Modifier | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `public`        | if you do not specify an access modifier, the default is public.                                                         |
| `private`       | If you modify the member with the private keyword, it cannot be accessed from outside the containing class.              |
| `protected`     | It is similar to the private modifier, with the difference that it can access protected elements within derived classes. |
| `readonly`      | read-only modifier                                                                                                       |

## [Generic](/typescript/generic.ts)

Generic types in TypeScript allow you to write objects, functions and classes that work with multiple data types, instead of being limited to a single data type.

The type variable "T" can be used whenever a type annotation is needed.
