function maxNumber(arr) {
    let newArr = [];
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNum) {
            biggestNum = arr[i];
        }
    }

    let lastNum = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        let currNum = arr[i];
        if (currNum === biggestNum) {
            break;
        }
        if (currNum <= lastNum) {
            continue;
        } else {
            newArr.unshift(currNum);
        }
    }
    if (biggestNum !== lastNum) {
        newArr.unshift(biggestNum);
    }
    newArr.push(lastNum);
    console.log(newArr.join(' '));
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);