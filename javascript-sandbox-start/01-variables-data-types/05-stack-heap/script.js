// Values are stored on the stack
const name = 'John';
const age = 30;


// Reference values stored on the heap
const person = {
    name: 'Brad',
    age: 40
}

let newName = name;
newName = 'Johnathan'

let newPerson = person;
newPerson.name = 'Bradly';

console.log(name, newName);
console.log(person, newPerson);