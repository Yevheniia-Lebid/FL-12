function makeNumber (str){
    let nums = '';
    for(var i=0; i<str.length;i++){
        if(!isNaN(str[i])){
            nums=nums.concat(str[i]);
        }
    }
    return nums;
}
function countNumbers (str){
    let strNumbers = makeNumber(str),
        countNumbers = [];
    for(var i=0; i<strNumbers.length;i++){
        if(isNaN(countNumbers[String(strNumbers[i])])){
            countNumbers[String(strNumbers[i])] = Number(1);
        }else{
            countNumbers[String(strNumbers[i])]++;
        }
    }
    return countNumbers;
}
countNumbers();