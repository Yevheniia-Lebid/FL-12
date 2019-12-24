let D = 0, a = 0, b = 0, c = 0;
const two = 2, four = 4;
a=prompt('Input a: ');
b=prompt('Input b: ');
c=prompt('Input c: ');

if (isNaN(a) || isNaN(b) || isNaN(c) || Number(a)===0){
    console.log('Invalid input data'); 
}else{
    a=Number(a);
    b=Number(b);
    c=Number(c);
    D = b*b-four*a*c;
    if (D===0){
        console.log('x = ', -b/(two*a));
    }
    if (D > 0){
        console.log('x1 = ',Math.round((-b+Math.sqrt(D))/(two*a)),' and x2 = ',Math.round((-b-Math.sqrt(D))/(two*a)));
    }
    if (D < 0){
        console.log('No solution');
    }
}