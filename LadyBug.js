function ladybug(arr) {
    let lengthOfTheField = Number(arr.shift());
    let positionFilledWithLadybugs = arr.shift().split(' ').map(Number);
    let initialField = [];

    for (let i = 0; i < lengthOfTheField; i++) {
        initialField.push(0);
    }
    for (let i = 0; i < lengthOfTheField; i++) {
        if (positionFilledWithLadybugs[i] < lengthOfTheField) {
            initialField[positionFilledWithLadybugs[i]] = 1
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let start = Number(command[0]);
        let direction = command[1];
        let moves = Number(command[2])



        if ((initialField[start] >= 0 && initialField[start] <= initialField.length - 1) && initialField[start] === 1) {

            initialField[start] = 0;

            if (direction == 'right' && (initialField[start + moves] <= initialField.length - 1 && initialField[start + moves] >= 0)) {
                for (let i = start; i <= initialField.length - 1; i += moves) {
                    if (initialField[i + moves] === 0) {
                        initialField[i + moves] = 1;
                        break;
                    }
                }
            } else if (direction == 'left' && (initialField[start - moves] >= 0 && initialField[start - moves] <= initialField.length - 1)) {
                for (let i = start; i >= 0; i -= moves) {
                    if (initialField[i - moves] === 0) {
                        initialField[i - moves] = 1;
                        break;
                    }
                }
            }
        }

    }
    console.log(initialField.join(' '));

}
ladybug([
    '1000',
    '100 200 300 400 500 600 700 800 900 1000',
    '1000 left 999',
    '300 right 100',
    '400 right 400',
    '500 left 500',
    '0 right 1',
    '600 right 100',
    '700 left 700',
]);