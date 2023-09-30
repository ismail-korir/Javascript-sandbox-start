const age = 19;

// Using if statement

if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You can not vote');
}

// Using ternary operator
age >= 18 ? console.log('You can vote') : console.log('You can not vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;

console.log(canVote);