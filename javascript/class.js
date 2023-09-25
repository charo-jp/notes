// Write a function that checks if a given value is an instance of a given class or superclass.
// For this problem, an object is considered an instance of a given class if that object has access
// to that class's methods.

// There are no constraints on the data types that can be passed to the function.
// For example, the value or the class could be undefined.

const checkIfInstanceOf = function (obj, classFunction) {
  // To check whether class A is an instance of B, use instanceof operator
  // However, this operator does not work for primitive types such as Number.

  // Almost all of the objects in JavaScript is an instance of Object.
  // Object.getPrototypeOf(obj) returns the prototype of an object. Inheritance is achieved with the prototype chain.
  while (obj != null) {
    if (obj.constructor === classFunction) {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }

  return false;
};

console.log(checkIfInstanceOf(new Date(), Date)); // true
console.log(checkIfInstanceOf(Date, Date)); // false : Both are class of Date, not an instance.
console.log(checkIfInstanceOf(5, Number)); // true. the number "5" has an access to toFixed() method which belongs to Number.
console.log(checkIfInstanceOf(12, Object)); // true. the number "5" has an access to toFixed() method which belongs to Number.
