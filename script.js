function showVerticalMessage(str) {

    let newString = '';
    const isValid = (str[0] === 'м');

    if (isValid) {
        newString = 'М'
        makeVerticalString(str);
    } else {
        newString = str[0];
        makeVerticalString(str);
    }
    console.log(newString);

    function makeVerticalString(str) {
        for (let char of str.substr(1, 9)) {
            newString = newString += ('\n' + char);
        }
    }
}

showVerticalMessage('марафон');