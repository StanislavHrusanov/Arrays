function equalArrays(arrOne, arrTwo) {
    let sum = 0;
    let index;
    arrOne = arrOne.map(Number);
    arrTwo = arrTwo.map(Number);
    let areEqual = true;

    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            index = i;
            areEqual = false;
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            break;
        } else {
            continue;
        }
    }
    if (areEqual) {
        for (let element of arrOne) {
            sum += element;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['10','20','30'], ['10','20','30']);