function calculate(items) {
    let sum = 0;
    let sum2 = 0;
    let concat = '';

    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];
        sum += currentItem;
        sum2 += 1 / currentItem;
        concat += currentItem;
    }
    console.log(sum);
    console.log(sum2);
    console.log(concat);
}
