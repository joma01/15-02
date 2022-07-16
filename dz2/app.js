const block = document.querySelector(".block");

let position = 0;
let positionTop = 0;


const move = () => {
    if (position <= 440 && positionTop == 0) {
        position += 16;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position >= 440 && positionTop <= 440) {
        positionTop += 16;
        block.style.top = `${positionTop}px`;
        setTimeout(move, 100);
    } else if (positionTop >= 440 && position != 0) {
        position -= 16;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position == 0 && positionTop != 0) {
        positionTop -= 16;
        block.style.top = `${positionTop}px`;
        setTimeout(move, 100);
    }
}
move()