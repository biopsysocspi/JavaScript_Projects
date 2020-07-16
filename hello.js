function loadFunction(){
    //ide jön a kód

//1. függvény: Hello, World!
function helloWorld(){             
    
    return 'Hello, World!'

}

    //1. függvény elnevezése: message
    message = helloWorld();         


    //<name> változó bekérése
    //let name = prompt ('Please type your name(s)! (separated with a comma)'); 
    let arrayName = prompt("Enter your names").split(",");

    console.log(arrayName)    


//2. függvény: Hello, <name>!
function helloName(arrayName){           
    
    const output = 'Hello, ' + arrayName.join(', ') + '!';
    return output;

}

    //2. függvény elnevezése: salutation 
    salutation = helloName(arrayName);  


//3. függvény: kiíratja az 1. vagy a 2. függvényt a feltételeknek megfelelően
function helloWrite(){              

    //conditional
    if (arrayName === '' || arrayName === null){       
        
        //ha <name> üres, vagy null, akkor 1. függvény
        return message;

    } else {

        //ha <name> bármi más, akkor 2. függvény
        return salutation;
    } 
}

    //3. függvény elnevezése: display
    display = helloWrite();          

//kiírás 

document.getElementById("hello").innerHTML = display;


  }
  
  window.addEventListener("load", loadFunction);

