function coutChar(c) {
    console.log(c.length)
}
coutChar("text")
function numbers(number1,number2) {
    if(number1 > number2){
        console.log("Первое больше второго")
    }else if(number1<number2){
        console.log( "Второе больше первого")
    }else {
        console.log("Они равны")
    }
}
const number = {
    number1: 312,
    number2: 69
}
numbers(number.number1,number.number2)