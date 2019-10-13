let GameData = {
    arrayWords: ['Javascript','Array','DigitalCareerInstitute','fbw4'],
    word: '',
    arrayOfLetters:[],
    numberOfTries: 8
    //If you think is needed add more Key:values to the object, Also Feel free to add your own words to the array :)
};

//SHOW FUNCTIONS -- NO NEED TO CHANGE ANYTHING HERE

txtField = document.getElementById('field');
letterCont = document.getElementById('letters');
message = document.getElementById('message');
txtField.addEventListener('keydown',getWord)


function showWord() {
    let output = '';
    GameData.arrayOfLetters.forEach(element => {
        output += `
        <div class = "letter">
            <span>${element}</span>
        </div>
        `
    });
    letters.innerHTML = output;

}

function showMessages(param) {
    if (param) {
        showWord()
        message.innerHTML = "This letter is in the Word";
    } else {
        message.innerHTML = "Try again! you have still "+ GameData.numberOfTries+" Tries";
    }
}

function showResult(param) {

    if (param) {
        showWord()
        message.innerHTML = "You Won! :)";
    } else {
        message.innerHTML = "You lost :( The word was "+ GameData.word;
    }
    
}

function getWord(e) {
    if (e.keyCode == 13) {
        Game(e.target.value)
    }
}


//BEGIN CODING AFTER THIS----------


function startGame() {
 
}

function Game(input) {

}




startGame()