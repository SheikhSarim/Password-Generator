let passwordCounter = 1;

function generatePassword() {

    let hiddenWord = document.getElementById('Word').value;


    let generatedPassword = genPass(12, hiddenWord);
    console.log('Generated Password:', generatedPassword);


    let passwordField = document.getElementById("password");

    passwordField.classList.add("password-confirmation");

    setTimeout(() => {
        passwordField.classList.remove("password-confirmation");
    }, 2000);
}

function genPass(length, hiddenWord) {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let remainingLength = length - hiddenWord.length;

    for (let index = 0; index < remainingLength; index++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);


    }

    let insertionIndex = Math.floor(Math.random() * (pass.length + 1));
    pass = pass.slice(0, insertionIndex) + hiddenWord + pass.slice(insertionIndex);



    document.getElementById("password").value = pass;


    return pass;


}
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");

    alert("Password copied to clipboard!");
}