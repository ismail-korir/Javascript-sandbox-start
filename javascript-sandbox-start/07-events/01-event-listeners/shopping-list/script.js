const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');


    items.forEach((item) => item.remove());
}

clearBtn.addEventListener('click', onClear);

setTimeout(() => clearBtn.click(), 5000);