function equalSums(arr) {
    let sumOfleft = 0;
    let isEqual = false;

    if (arr.length === 1) {
        console.log(0);
    } else if (arr.length === 2) {
        console.log('no');
    } else {
        for (let i = 0; i < arr.length - 2; i++) {
            sumOfleft += arr[i];
            let sumOfRight = 0;
            for (let j = i + 2; j < arr.length; j++) {
                sumOfRight += arr[j];
            }
            if (sumOfleft === sumOfRight) {
                console.log(i + 1);
                isEqual = true;
                break;
            }
            if (isEqual) {
                break;
            }
        }
        if (isEqual === false) {
            console.log('no');
        }
    }
}
equalSums([1, 2, 3, 3]);