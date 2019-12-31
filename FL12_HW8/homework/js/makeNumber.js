
function makeNumber (str){
    let nums = '';
    for(var i=0; i<str.length;i++){
        if(!isNaN(str[i])){
            nums=nums.concat(str[i]);
        }
    }
    return nums;
}

makeNumber();