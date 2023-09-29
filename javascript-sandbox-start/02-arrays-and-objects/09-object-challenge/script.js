const library = [
    {
        title: 'The Read Ahead',
        author: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Is',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

console.log(firstBook);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);