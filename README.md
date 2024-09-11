# TypeScript Notes

TypeScript is an open source language developed by Microsoft. It is a superset of JavaScript. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

```bash
npm install -g typescript
```

## Table of content

- [The TypeScript compiler.](#the-typescript-compiler)
- [Data types](#data-types)
- [Type](#type)

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

Type is a keyword in TypeScript that we can use to define the shape of data.

Type aliases in TypeScript mean “a name for any type.” They provide a way of creating new names for existing types.
Type aliases don’t define new types; instead, they provide an alternative name for an existing type.
Type aliases can be created using the type keyword, referring to any valid TypeScript type, including primitive types.

```ts
type Programmer = {
  name: string;
  technology: string[];
};
```
