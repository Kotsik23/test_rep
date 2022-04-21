function btnClick() {
    alert("Hello, Human 🤚");
}

const deleteLetter = (word, deleteLetter) => {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== deleteLetter) {
            result += word[i];
        }
    }
    return result;
}

const performTask = () => {
    let word = document.getElementById("user-word").value;
    let letter = document.getElementById("user-letter").value;

    if (!word || !letter) {
        alert("Incorrect values.");
        return;
    }

    let result = deleteLetter(word, letter);
    alert(result);
}