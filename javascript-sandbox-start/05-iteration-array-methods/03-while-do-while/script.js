let i = 0;


// while (i <= 20) {
//    console.log('Number ' + i); 
//    i++;
// }

// Loop over array
const arr = [10,20,30,40];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// Nesting while loop
while (i <= 5) {
    console.log('Number ' + i);

    let j = 1;
    while(j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        i++
    }
}
i++;