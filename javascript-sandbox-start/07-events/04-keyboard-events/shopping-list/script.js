const itemInput = document.getElementById('item-input');

const onkeypress = e => { 
    console.log('keypress');
}
const onKeyUp = e => { 
    console.log('keyup');
}

itemInput.addEventListener('keyup', onKeyUp)