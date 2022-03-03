let count = 1;
// setInterval(() => {
//     console.log('konnichiwa');
// }, 5000);

const timeInt = setInterval(() => {
    console.log('konnichiwa', count++);
    if (count === 5) {
        clearInterval(timeInt);
    }
}, 5000);