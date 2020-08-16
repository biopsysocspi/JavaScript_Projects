function replaceVowels(str) {
    
    let  string = `The fat cat ran down the street.
    It was searching for a mouse to eat.`

    for (let i = 0; i < string.length; i++) {

        let vowels = /[aeiou]/gi;
        comment = string.replace(vowels, '');  
    }

    console.log(comment);
    return comment;
}

  replaceVowels();