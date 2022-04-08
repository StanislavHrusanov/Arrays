function reverse(n, numbers) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(numbers[i]);
    }
    let reversedArr = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        reversedArr.push(newArr[i]);
    }
    console.log(reversedArr.join(' '));
}
reverse(3, [10, 20, 30, 40, 50]);