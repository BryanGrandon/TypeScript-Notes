# TypeScript Notes

TypeScript is an open source language developed by Microsoft. It is a superset of JavaScript. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

```bash
npm install -g typescript
```

## Table of content

- [Data types](#data-types)
- [Type](#type)
- [Interfaces](#interfaces)
- [Classes](/typescript/class.ts)
- [Generic](#generic)

## [Data types](/typescript/data-type.ts)

The data types in typescript are indicated or the language infers what type of data is being assigned to the variable.

```ts
let user_1: string = 'Bryan'
let user_2 = 'Andres'
```

```ts
const add = (): number => {}
```

| Data types | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| `any`      | Any type of value can be assigned to it.                                     |
| `void`     | void is used where there is no data.                                         |
| `unknown`  | The use of unknown allows us to work with unknown values with type safety.   |
| `never`    | Never is used in the case of functions that we know will not return a value. |
| `arrays`   | Ways to specify the data type to be contained in the array                   |
| `tuples`   | Similar to an array specifying each type to be in the array                  |
| `enums`    | Enums allow a developer to define a set of named constants.                  |

## [Type](/typescript/type.ts)

Type aliases don’t define new types; instead, they provide an alternative name for an existing type. Type aliases can be created using the type keyword, referring to any valid TypeScript type, including primitive types.

```ts
type Programmer = {
  name: string
  technology: string[]
}
```

## [Interfaces](/typescript/interfaces.ts)

In TypeScript, an interface defines a contract that an object must adhere to.

```ts
interface Client {
  name: string
  address: string
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
