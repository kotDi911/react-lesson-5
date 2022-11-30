export const setNumber = (numberVisible, number) => {
    const character = "**** **** **** ";

    if (!numberVisible) {
        return character + number.substring(number.length - 4)
    } else {
        return number.match(new RegExp('.{1,4}', 'g')).join(" ")
    }
}