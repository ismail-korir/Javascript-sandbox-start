console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 > 15);

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;


console.log(a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || null || '';

console.log(b);

// ?? return the right side when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 30;
c = undefined ?? 30;

console.log(c);
