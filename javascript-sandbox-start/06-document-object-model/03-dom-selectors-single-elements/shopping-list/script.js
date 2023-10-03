console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').getAttribute('id'));


// Set attribute
document.getElementById('app-title').id = 'new-id';


const title = document.getElementById('app-title');

// Get/ Change content

// Document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

// Use these methods on other elements
const list = document.querySelector('ul');
const firstItem = list.querySelector('li')
firstItem.style.color = 'blue';
