function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let room = 0;
    let arrAsString = arr.shift();
    arr = arrAsString.split('');
    let newArr = [];
    let line = '';
    for (let element of arr) {
        if (element !== ' ' && element !== '|') {
            line += element;
        } else {
            newArr.push(line);
            line = '';
            continue;
        }
    }
    newArr.push(line);

    for (let i = 0; i < newArr.length - 1; i += 2) {
        let item = newArr[i];
        let number = Number(newArr[i + 1]);
        room++;
        if (item == 'potion') {
            if (health <= 100 - number) {
                console.log(`You healed for ${number} hp.`);
                health += number;
            } else {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            }
            console.log(`Current health: ${health} hp.`);

        } else if (item == 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${room}`);
                break;
            }
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);