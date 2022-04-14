function addAndRemove(arr) {
    let line = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            line.push(i + 1);
        } else if (arr[i] == 'remove') {
            line.pop();
        }
    }
    if (line.length > 0) {
        console.log(line.join(' '));
    } else {
        console.log('Empty');
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);