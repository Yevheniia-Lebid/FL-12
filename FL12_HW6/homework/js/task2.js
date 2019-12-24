let a = 0, b = 0, c = 0;
a=prompt('Input a: ');
b=prompt('Input b: ');
c=prompt('Input c: ');

if (isNaN(a) || isNaN(b) || isNaN(c) || a.length===0 || b.length===0 || c.length===0){
    console.log('input values should be ONLY numbers')  
}else{   
    a=Number(a);
    b=Number(b);
    c=Number(c);
    if(a<=0 || b<=0 || c<=0){
        console.log('A triangle must have 3 sides with a positive definite length');
    }else{
        if(a+b<=c || a+c<=b || b+c<=a){
            console.log('Triangle doesn’t exist');  
        }else{
            if(a===b && a===c){
                console.log('Equilateral triangle');
            }else{
                if(a===b || a===c || b===c){
                    console.log('Isosceles triangle');
                }else{
                    console.log('Scalene triangle');
                }
            }
        }    
    }
}

