let person = { name: "John", age: 24 };
let symbol = Symbol("sym");
alert("Open the console to see all the types of data in JS");

function typesOfData(x) {
  return typeof x;
}

console.log("a is a:", typesOfData("a"));
console.log("2 is a:", typesOfData(2));
console.log("true is a:", typesOfData(true));
console.log("NaN is a:", typesOfData(NaN));
console.log("nothing is:", typesOfData());
console.log("person is an:", typesOfData(person));
console.log("Null is an:", typesOfData(null));
console.log("2n is a:", typesOfData(2n));
console.log("symbol is a:", typesOfData(symbol));
