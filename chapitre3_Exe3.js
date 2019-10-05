// Write a function that count the number of Char in a string

function countChar(string, char) {
    const arr = Array.from(string);
    let count = 0;
    
    arr.forEach(function (letter) {
        if (letter === char) {
            count++;
        }
    });

    return `This string has ${count} ${char}`;    
}