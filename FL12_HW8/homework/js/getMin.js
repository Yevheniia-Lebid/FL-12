function getMin( ... args){
    let Min = args[0],
        NumArgs = args.length;
    for ( var i = 1;i<NumArgs;i++){
        if (Min>args[i]) {
            Min = args[i];
        }
    }
    return Min;
}
getMin(1,2);