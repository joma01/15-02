let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

ontimeupdate();

counterPlusElem.addEventListener("click", () => {
    count++;
    ontimeupdate();
});

counterMinusElem.addEventListener("click", () => {
    count--;
    ontimeupdate();
});

function ontimeupdate() {
    counterDisplayElem.innerHTML = count;
};