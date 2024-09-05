# TypeScript Notes

TypeScript is an open source language developed by Microsoft. It is a superset of JavaScript. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

```bash
npm install -g typescript
```

## Table of content

- [The TypeScript compiler.](#the-typescript-compiler)
- [Data types](#data-types)

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

- javaScript types

  - [String](/typescript/data-types/javascript/string.ts)
  - [Number](/typescript/data-types/javascript/number.ts)
  - [Boolean](/typescript/data-types/javascript/boolean.ts)
  - [Null](/typescript/data-types/javascript/null.ts)
  - [Undefined](/typescript/data-types/javascript/undefined.ts)
  - [Object](/typescript/data-types/javascript/object.ts)
  - Function

- The data types added by typescript

  - [Any](/typescript/data-types/typescript/any.ts)
  <!-- VOID -> Generally used on function return-types -->
  - Unknown
  - Never
  - [Arrays](/typescript/)
  - Tuples
  - Enums
  - Inferred types
