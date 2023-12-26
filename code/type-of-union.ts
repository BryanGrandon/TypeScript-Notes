// -------- OR -------- //

let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;

// -------- AND -------- //

interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};
