// Write your solution in this file!
const employee = {
    name: "Mariia",
    streetAddress: "8810 Flower Ave"
}

function updateEmployeeWithKeyAndValue(Object, key, value) {
    let copyOfEmployee = {
        ...employee,
        [key]: value
    }
    return copyOfEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let copyOfEmployee = {
        ...employee,
    }
    delete copyOfEmployee[key];
    return copyOfEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
