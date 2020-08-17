function replaceVowels(str) {
    
    str = `The fat cat ran down the street.
    It was searching for a mouse to eat.`

    for (let i = 0; i < str.length; i++) {

        let vowels = /[aeiou]/gi;
        comment = str.replace(vowels, '');  
    }

    console.log(comment);
    return comment;
}

replaceVowels();