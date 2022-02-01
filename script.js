function showVerticalMessage(str) {

    const isValid = (str[0] === 'м');
    const startString = 'М';
    let verticalString = '';

    if (isValid) {
        let newString = startString + str.slice(1, 9);
        makeVerticalString(newString);
    } else {
        let newString = str.slice(0, 9);
        makeVerticalString(newString);
    }
    console.log(verticalString);

    function makeVerticalString(newString) {
        for (let char of newString) {
            verticalString += char + '\n';
        }
        verticalString = verticalString.slice(0, -1);
    }

}

showVerticalMessage('марафон');