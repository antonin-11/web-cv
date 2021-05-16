const texts = ["websites", "illustrations", "pancakes"];
let count = 0;
let index = 0; 
let currentText = "";
let letter = "";
let dir_write = true;
let select_if = 0;
let post_text = "test ";

(function type() {
    select_if = 0;
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    if (dir_write == true) {
        letter = currentText.slice(0, ++index);
    }
    if (dir_write == false) {
        letter = currentText.slice(0, --index);
    }
    
    document.querySelector(".text_writing").textContent = post_text + letter;
    if (letter.length === 0 && dir_write === false) {
        count++;
        index = 0;
        dir_write = true;
        select_if = 2;
    }
    if (letter.length === currentText.length) {
        dir_write = false;
        select_if = 1;
    }
    if (select_if === 1) {
        setTimeout(type, 1000);
    } else if (select_if === 2) {
        setTimeout(type, 100);
    } else {
        if (dir_write == true) {
            setTimeout(type, 160);
        } else {
            setTimeout(type, 50);
        }
    }
})();