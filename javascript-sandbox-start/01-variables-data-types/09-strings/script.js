let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am  ' + age + ' years old';

//Template literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// Properties and methods
const s = String('Hello World');

x = typeof s;

// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('e');

x = s.substring(2, 5);

x = s.trim(-11, -6);

console.log(x)