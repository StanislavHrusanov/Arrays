function reverse(input) {
    let line = '';
    for (let i = input.length - 1; i >= 0; i--) {
        line += input[i] + ' ';
    }
    console.log(line);
}
reverse(['a', 'b', 'c', 'd', 'e']);