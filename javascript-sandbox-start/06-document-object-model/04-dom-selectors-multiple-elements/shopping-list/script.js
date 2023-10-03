const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

// listItems[1].computedStyleMap.color = 'red';

// listItems.forEach((item, index) => {
//     item.style.color = 'red';
    
//    if (index === 1) {
//     item.remove();
//    }

//    if (index === 0) {
//     item.innerText = 'Oranges';
//    }

// });

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItems2.forEach((item) => {
    console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0]);

