function orbit(input) {
    let heightOfTheField = Number(input.shift());
    let widthOfTheField = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());
    let field = [];

    for (let col = 0; col < heightOfTheField; col++) {
        let rowOfTheField = [];
        for (let row = 0; row < widthOfTheField; row++) {
            rowOfTheField.push(0);
        }
        field.push(rowOfTheField);
    }

    for (let row = 0; row < heightOfTheField; row++) {
        for (let col = 0; col < widthOfTheField; col++) {
            field[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }
    console.log(field.map(x => x.join(' ')).join('\n'));
}
orbit([4, 4, 0, 0]);