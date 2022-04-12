function ladybug(arr) {
    let lengthOfTheField = Number(arr.shift());
    let positionFilledWithLadybugs = arr.shift().split(' ').map(Number);
    let initialField = [];

    for (let i = 0; i < lengthOfTheField; i++) {
        initialField.push(0);
    }
    for (let i = 0; i < positionFilledWithLadybugs.length; i++) {
        if (positionFilledWithLadybugs[i] > initialField.length - 1) {
            continue;
        }
        initialField[positionFilledWithLadybugs[i]] = 1;
    }

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let start = Number(command[0]);
        let direction = command[1];
        let moves = Number(command[2]);

        if (initialField[start] === 0 || start > initialField.length - 1 || start < 0) {
            continue;
        }

        initialField[start] = 0;

        if (moves < 0) {
            direction = direction === 'right' ? 'left' : 'right';
            moves = Math.abs(moves);
        }

        let nextPosition = 0;

        if (direction == 'right') {
            nextPosition = start + moves;
        } else if (direction == 'left') {
            nextPosition = start - moves;
        }

        while (initialField[nextPosition] === 1) {
            if (direction === 'right') {
                nextPosition += moves;
            } else if (direction === 'left') {
                nextPosition -= moves;
            }
        }

        if (nextPosition > initialField.length - 1 || nextPosition < 0) {
            continue;
        }

        initialField[nextPosition] = 1;
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
