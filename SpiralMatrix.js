function spiralMatrix(arrLength, numberOfArrs) {
    let matrix = [];

    for (let i = 0; i < numberOfArrs; i++) {
        let arr = [];
        for (let j = 0; j < arrLength; j++) {
            arr.push(0);
        }
        matrix.push(arr);
    }

    let row = 0;
    let col = 0;
    let direction = 'right';

    for (let i = 1; i <= arrLength * numberOfArrs; i++) {

        if (direction == 'right') {
            if (col < arrLength && matrix[row][col] == 0) {
                matrix[row][col] = i;
                col++;
            } else {
                direction = 'down';
                col--;
                row++;
                i--;
            }
        } else if (direction == 'down') {
            if (row < numberOfArrs && matrix[row][col] == 0) {
                matrix[row][col] = i;
                row++;
            } else {
                direction = 'left';
                row--;
                col--;
                i--;
            }
        } else if (direction == 'left') {
            if (col >= 0 && matrix[row][col] == 0) {
                matrix[row][col] = i;
                col--;
            } else {
                direction = 'up';
                row--;
                col++;
                i--;
            }
        } else if (direction == 'up') {
            if (row >= 0 && matrix[row][col] == 0) {
                matrix[row][col] = i;
                row--;
            } else {
                direction = 'right';
                col++;
                row++;
                i--;
            }
        }
    }

    for (let i = 0; i < numberOfArrs; i++) {
        let result = matrix[i];
        result = result.join(' ');
        console.log(result);
    }
}
spiralMatrix(5, 5);