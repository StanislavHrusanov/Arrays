function sumEvenNumbers(numbers) {
    let sum = 0;
    numbers = numbers.map(Number);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    console.log(sum);

}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);