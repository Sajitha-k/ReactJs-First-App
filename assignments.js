console.log("1.Write method to do shallow copy of a list using ES6 feature.");

// shallow copy of a list using ES6 feature

let original = ['first', 'second', 'third']

let shallowCopy = original;
console.log("Original before edit : ", original);
console.log("shallowCopy before edit : ", shallowCopy);
shallowCopy[0] = 'four';

console.log("Original after edit : ", original);
console.log("shallowCopy after edit : ", shallowCopy);

// END: shallow copy of alist using ES6 feature

console.log("2.Write method to do shallow copy of an object using ES6 feature.");
let employee = { Name: 'sajitha', Age: '30' };
let cloneEmployee = employee;
console.log("Original before edit : ", employee);
console.log("shallowCopy before edit : ", cloneEmployee);

cloneEmployee.Name = 'sajitha K';

console.log("Original before edit : ", employee);
console.log("shallowCopy before edit : ", cloneEmployee);



//Deep Clone
console.log("3.Write method to do deep copy of a list without using any third party library.");
let a = ['first', 'second', 'third'];
let b = JSON.parse(JSON.stringify(a));
console.log("Original before edit : ", a);
console.log("deepCopy before edit : ", b);

b[0] = 'four';

console.log("Original after edit : ", a);
console.log("deepCopy after edit : ", b);


console.log("4.Write method to do deep copy of a object without using any third partylibrary.");

let c = { Name: 'sajitha', Age: '30' };
let d = JSON.parse(JSON.stringify(c));

console.log("Original before edit : ", c);
console.log("deepCopy before edit : ", d);

d.Name = "sajitha k";

console.log("Original after edit : ", c);
console.log("deepCopy after edit : ", d);

console.log("5.Is the Fetch API an ECMAScript feature ? ");
console.log("No. It's part of the Web platform API defined by the standards bodies WHATWG and W3C." +
  "The various objects that implement the Fetch API are 'host objects'");
