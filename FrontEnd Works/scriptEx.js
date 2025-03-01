let bgContainerEl = document.getElementById("clickCounterContainer");
let countEl = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");
if (clickCount === null) {
    countEl.textContent = 0;


} else {
    countEl.textContent = clickCount;

}



function onIncrementCount() {
    let previsousCountervalue = countEl.textContent;
    let upDatedvalue = parseInt(previsousCountervalue) + 1;
    localStorage.setItem("clickCount", upDatedvalue);

    countEl.textContent = upDatedvalue;

}