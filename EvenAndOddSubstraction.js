function evenAndOddSubstraction(numbers) {
    let sumOfOdd = 0;
    let sumOfEven = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sumOfEven += numbers[i];
        } else {
            sumOfOdd += numbers[i];
        }
    }
    console.log(sumOfEven - sumOfOdd);
}
evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);