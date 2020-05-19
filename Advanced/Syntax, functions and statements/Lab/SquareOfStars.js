function print(size) {
    if (typeof (size) === 'undefined') {
        for (let i = 1; i <= 5; i++) {
            console.log('* '.repeat(5));
        }
    }
    else {
        for (let i = 1; i <= size; i++) {
            console.log('* '.repeat(size));
        }
    }
}