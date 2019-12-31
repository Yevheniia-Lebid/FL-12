function isLeapYear (input){
    let milliseconds = Date.parse(input), date = new Date();
    if (isNaN(input)){
        date.setTime(milliseconds);
    }else{
        date.setTime(input);
    }
    if (!isNaN(milliseconds)){
        
        if (!isNaN(date.valueOf())){
            if (date.getYear()%4 === 0){
                return ' “'+date.getYear()+'” is a leap year';
            }else{
                return ' “'+date.getYear()+'” is not a leap year';
            }
        }else{
            return 'Invalid date';
        }
    }
}
isLeapYear('1984-01-15');