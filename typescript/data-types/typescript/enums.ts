const person = {
  name: " John",
  age: 21,
};

const personPropertiesObject = {
  NAME: "name",
  AGE: "age",
};

// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
enum personProperties {
  NAME = "name",
  AGE = "age",
}

// Component 1
person.name = "Jane";
person["age"] = 31;

// Component 2 Object
person[personPropertiesObject.NAME] = "Jane";
person[personPropertiesObject.AGE] = 31;

// Component 3 Enum
person[personProperties.NAME] = "Jane";
person[personProperties.AGE] = 31;
