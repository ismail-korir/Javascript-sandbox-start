

const x = true;

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 2;

if (children) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

const posts = ['Post One', 'Post Two'];

if (posts) {
    console.log('List Posts');
} else {
    console.log('No Posts');
}