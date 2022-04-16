function printNthElement(arr) {
    let step = Number(arr.pop());
    let line = '';

    for (let i = 0; i < arr.length; i += step) {
        line += arr[i] + ' ';
    }

    console.log(line);
}
printNthElement(['1', '2', '3', '4', '5', '6']);