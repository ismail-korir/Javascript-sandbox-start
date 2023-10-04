let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent; 

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';

console.log(output);