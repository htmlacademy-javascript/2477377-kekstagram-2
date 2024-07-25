let checkLength = (string, maxLength) => {

    let result = string.length <= maxLength;

    return result;

}

console.log(checkLength('проверяемая строка', 10));
