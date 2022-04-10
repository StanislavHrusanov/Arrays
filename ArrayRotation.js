function arrRotation(arr, number) {
    for (let i = 0; i < number; i++) {
        let shifted = arr.shift();
        arr.push(shifted);
    }
    console.log(arr.join(' '));
}
arrRotation([2, 4, 15, 31], 5);