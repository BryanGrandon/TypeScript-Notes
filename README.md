# TypeScript

TypeScript is an open source language developed by Microsoft. It is a superset of JavaScript. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## _Table of content_

- [Introduction](#introduction)
- [Primitive type](#primitive-types)
- [Type of union](#type-of-union)
- [Interface and types](#interfaces-and-types)
- [Functions](#functions)
- [Class](#class)
- [Generic](#generic)

## _Introduction_

This project is to have a record of what i have learned about TypeScript.

## _[Primitive types](/code/primitive-types.ts)_

- Number
- bigInt
- String
- Boolean
- Enumeration
- Any
- Unknown

## _[Type of union](/code/type-of-union.ts)_

- OR ( `|` )
- AND ( `&` )

## _[Type of collection](/code/type-of-collection.ts)_

Fundamentally, TypeScript supports two kinds of collections: arrays (where all the members are of the same type and are accessed by position) and tuples (where each member can be of a different type).

- Array
- tuples

## _Interfaces and types_

In TypeScript we can use Type and Interface to describe the structure of objects.

### [Difference](/code/interface-and-types/difference.ts)

- Interface
- Declaration merging
- Type
- Unions
- Tuples

### [Type of property](/code/interface-and-types/type-of-property.ts)

- Interface
- Type

### [Extends](/code/interface-and-types/extends.ts)

- interface

## _[Functions](/code/function.ts)_

They're how you build up layers of abstraction, mimicking classes, information hiding, and modules.

Set the type of data to be entered to the function. <br>
Set the type of data to be output by the function.

- Functions with name.
- Anonymous functions.
- Arrow function.
- Parameters.
- Definition of type of function.

## _[Class](/code/class.ts)_

Classes allow common object-oriented patterns to be expressed in a standard way, making features such as inheritance more readable and interoperable.

- They exist at compile time and during runtime.
- We can initialize properties and implement methods.
- Create instances of such a class.

## _[Generic](/code/generic.ts)_

Generic types in TypeScript allow you to write objects, functions and classes that work with multiple data types, instead of being limited to a single data type. The type variable "T" can be used whenever a type annotation is needed.

## _[Modules](/code/modules/)_

A module is a way to create a group of related variables, functions, classes, and interfaces, etc. It executes in the local scope, not in the global scope. In other words, the variables, functions, classes, and interfaces declared in a module cannot be accessible outside the module directly. We can create a module by using the export keyword and can use in other modules by using the import keyword.
