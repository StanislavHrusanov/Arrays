function diagonalAttack(arr) {

    for (let i = 0; i < arr.length; i++) {
        let raw = arr.shift().split(' ').map(Number);
        arr.push(raw);
    }

    let sumOne = 0;
    let sumTwo = 0;

    for (let i = 0; i < arr.length; i++) {
        let raw = arr[i];
        sumOne += raw[i];
        sumTwo += raw[raw.length - 1 - i];

    }

    if (sumOne == sumTwo) {

        for (let raw = 0; raw < arr.length; raw++) {

            for (let col = 0; col < arr[raw].length; col++) {

                if (col == raw || col == arr[raw].length - 1 - raw) {
                    continue;
                } else {
                    arr[raw][col] = sumOne;
                }
            }

        }

        for (let i = 0; i < arr.length; i++) {
            let raw = arr[i].join(' ');
            console.log(raw);
        }

    } else {
        for (let i = 0; i < arr.length; i++) {
            let raw = arr[i].join(' ');
            console.log(raw);
        }
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);