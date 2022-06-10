// var i = 0;
//     j = 0;{
//     var max = 7;
//     var space = "",
//         star = "";
// }
// while (i < max) {
//     space = "";
//     star = "";
//     for (j = 0; j < max - i; j++) space += " ";
//     for (j = 0; j < 2 * i + 1; j++) star += "*";
//     console.log(space + star);
//     i++;
//  }
let k = "";
for(let i = 1; i <= 7; i++) {
    for(let j = 0; j <= i; i++ ){
        k+="*"
    }
    k+='\n'
}
console.log(k)


for ( let j = 1; j <= 100; j++) {
    str = '';
    if( j%3 === 0 )
    {
        str += 'Fizz';
    }
    else if ( j%5 === 0 )
    {
        str += 'Buzz';
    }
    }
for( let j = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
    } else if (i % 3 === 0) {
            console.log('Fizz');
    } else if (i % 5 === 0) {
            console.log('Buzz');
    } else {
            console.log(i);
    }
}








