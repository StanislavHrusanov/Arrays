function maxSequenceOf(arr) {

    let maxSequence = [];
    let currentSequence = [];
    let firstElement = arr.shift();
    maxSequence.push(firstElement);
    currentSequence.push(firstElement);

    for (let element of arr) {
        if (element === firstElement) {
            firstElement = element;
            currentSequence.push(firstElement);
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }

        } else {
            currentSequence = [];
            firstElement = element;
            currentSequence.push(firstElement);
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
        }
    }
    console.log(maxSequence.join(' '));
}
maxSequenceOf([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);