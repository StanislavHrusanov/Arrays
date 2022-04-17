function tseamAccount(arr) {

    let account = arr.shift().split(' ');

    for (let j = 0; j < arr.length; j++) {

        let element = arr[j];

        if (element == 'Play!') {
            break;
        }
        let isExist = false;
        let indexOGame;
        let command = '';
        let game = '';
        let expansion = '';
        let indexOfSpace = 0;
        let indexOfDivider = 0;
        for (let k = 0; k < element.length; k++) {

            if (element[k] == ' ') {
                indexOfSpace++;
                continue;
            } else if (element[k] == '-') {
                indexOfDivider++;
                continue;
            }
            if (indexOfSpace == 0 && indexOfDivider == 0) {
                command += element[k];
            } else if (indexOfSpace == 1 && indexOfDivider == 0) {
                game += element[k];
            } else if (indexOfSpace == 1 && indexOfDivider == 1) {
                expansion += element[k];
            }

        }

        for (let i = 0; i < account.length; i++) {

            if (game == account[i]) {
                indexOGame = i;
                isExist = true;
            }
        }

        if (isExist) {
            if (command == 'Uninstall') {
                let removed = account.splice(indexOGame, 1);
            } else if (command == 'Update') {
                let raplaced = account.splice(indexOGame, 1);
                account.push(game);
            } else if (command == 'Expansion') {
                let expand = account.splice(indexOGame + 1, 0, `${game}:${expansion}`);
            }
        } else {
            if (command == 'Install') {
                account.push(game);
            }
        }
    }
    console.log(account.join(' '))
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
);