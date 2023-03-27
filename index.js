const employee = {}
function updateEmployeeWithKeyAndValue(employees, key, value) {
  //this function should take in a driver Object, a key and a value. The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.
  return Object.assign({}, employees, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  //this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
  const NEW_OBJ =  Object.assign({}, employee);
  delete NEW_OBJ[key];
  return NEW_OBJ;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
//this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in.
Object.assign({}, employee);
delete employee[key];
return employee;
}

