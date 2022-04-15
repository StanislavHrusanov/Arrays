function nonDecreasingSubset(arr) {
    let newArr = [];
    let currentBiggestNum = arr.shift();
    newArr.push(currentBiggestNum);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentBiggestNum) {
            currentBiggestNum = arr[i]
            newArr.push(currentBiggestNum);
        }
    }
    console.log(newArr.join(' '));
}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);