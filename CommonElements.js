function commonElements(arrOne, arrTwo) {
    for (let element of arrOne) {
        for (let elementOne of arrTwo) {
            if (element === elementOne) {
                console.log(element);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);