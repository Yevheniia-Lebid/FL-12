function convert(){
    let result = Array();
    let i = 0;
    while ( !(typeof arguments[i]==='undefined') ){
        if(typeof arguments[i]==='string'){
            result[i]=Number(arguments[i]);
        }else if(typeof arguments[i]==='number'){
            result[i]=String(arguments[i]);
        }else {
            result[i]=arguments[i];
        }
        i++;
    }
    return result;
}
let convert1='1',
    convert2=2,
    convert3=3,
    convert4='4';

console.log(convert());
console.log(convert(convert1,convert2));
console.log(convert(convert1,convert2,convert3,convert4));

function executeforEach(arrayOfValues,callbackFunction){
    let result = arrayOfValues;
    for(let i = 0; i < arrayOfValues.length; i++){
        result[i] = callbackFunction(arrayOfValues[i]);
    }
    return result;
}
let testArray = [1,2,3];
executeforEach(testArray, function(el){
                            console.log(el * 2)
                          });


function mapArray(arrayOfValues, callbackFunction){
    let result = executeforEach(arrayOfValues, function(el){
                                                    if(typeof el==='string'){
                                                        return callbackFunction(Number(el));
                                                    } else {
                                                        return callbackFunction(el);
                                                    }
                                                });
    return result;
}

let testArr = [3,'5',8];
console.log(mapArray(testArr, function(el) {
                                return el + 3
                              }));

function filterArray(arrayOfValues, callbackFunction){
    let result1 = Array(),
        result = executeforEach(arrayOfValues, function(el){
                                                    if(callbackFunction(el)){
                                                        return (el);
                                                    } else {
                                                        return undefined;
                                                    }
                                                });
    for(let i = 0; i < result.length; i++){
        if(!(result[i] === undefined)){
            result1.push(result[i]);   
        }   
    }
    return result1;
}
let testArr1 = [2,5,8];
console.log(filterArray(testArr1, function(el) {return el % 2 === 0}));

function flipOver( str){
    let result ='';
    for(let i=str.length-1; i>=0;i--){
        result+=str[i];
    }
    return result;
}

let greetings = 'hey world';
console.log(flipOver(greetings));

function makeListFromRange(myrange){
    let result = Array(),
        first = myrange[0],
        last = myrange[1];
    for(let i=0; i<last-first+1;i++){
        result[i]=first+i;
    }
    return result;
}

let myRange = [2,7];
console.log(makeListFromRange(myRange))

function getArrayOfKeys(actorsArray, keyValue){
    let result=executeforEach(actors, function (el){ return el[keyValue]});
    return result;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

console.log(getArrayOfKeys(actors, 'name')); 
function substitute(sourceArray){
    return mapArray(sourceArray, function (el){ if (el<30) return '*'; else return el})
}
let testArray9 =[58, 14, 48, 2, 31, 29];
console.log(substitute(testArray9)); 

function getPastDay(someDate, daysback){
    let microsecondsPerDay=86400000,
        datePast = new Date(someDate.getTime()-microsecondsPerDay*daysback);
    return datePast.getDate();
}

const date = new Date(2019, 0, 2);
console.log(getPastDay(date, 1)); 
console.log(getPastDay(date, 2)); 
console.log(getPastDay(date, 365)); 
