let countElement = document.getElementById("countervalue");

function onDecrease() {
    let previousElement = countElement.textContent;
    let updateElement = parseInt(previousElement) - 1;
    if (updateElement > 0) {
        countElement.style.color = "Green";
    } else if (updateElement < 0) {
        countElement.style.color = "Red";
    } else {
        countElement.style.color = "Black";
    }
    countElement.textContent = updateElement;

}

function onReset() {
    let updateElement = 0;
    countElement.style.color = "Black";
    countElement.textContent = updateElement;
}

function onIncrease() {
    let previousElement = countElement.textContent;
    let updateElement = parseInt(previousElement) + 1;
    if (updateElement > 0) {
        countElement.style.color = "Green";
    } else if (updateElement < 0) {
        countElement.style.color = "Red";
    } else {
        countElement.style.color = "Black";
    }
    countElement.textContent = updateElement;
}