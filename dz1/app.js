const Input = document.querySelector(".Input");
const Check = document.getElementsByClassName("Check");
const Result = document.querySelector(".Result");

const Validate = /0\d{13}$/;

Check[0].addEventListener("click", () => {
    if (Validate.test(Input.value)) {
        Result.innerText = "krasauchik";
        Result.style.color = "blue";
    } else {
        Result.innerText = "error";
        Result.style.color = "red";
    }
});

const block = document.querySelector(".block")

let num = 0;
const box = function () {
    num++;
    block.style.right =`${num}px`;
    if (num < 1) {
        return box();
    } else if (num > 300) {
        num = 0;
    } else {
        num += 360;
    }


}
block.addEventListener("click", box,)