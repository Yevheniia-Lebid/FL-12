let ContinuePlay = false,
    SlotWithBallNumber = 0,
    GuessedSlotNumber = 0,
    prize = 100,
    calculatedPrize = 0,
    totalPrize =0,
    SlotsCount = 8;
const two=2,
      FirstAttempt = 1,
      MaxAttempts = 3;
if (confirm('Do you want to play a game?')){
    do {
        SlotWithBallNumber=Math.round(Math.random()*SlotsCount);
        console.log(SlotWithBallNumber);
        let attempt = FirstAttempt, 
            userWon = false;
            calculatedPrize = prize;
        while (attempt <= MaxAttempts){
            do{
                GuessedSlotNumber=prompt('Choose a roulette pocket number from 0 to '+ SlotsCount+
                                    '\nAttepmts left ' + (MaxAttempts-attempt+FirstAttempt) +
                                    '\nTotal prize: '+totalPrize+'$'+
                                    '\nPossible prize on current attempt: '+calculatedPrize+'$');
            }while (isNaN(GuessedSlotNumber)|| GuessedSlotNumber===null);
            GuessedSlotNumber=Number(GuessedSlotNumber);
            if (GuessedSlotNumber === SlotWithBallNumber){
                userWon = true;
                break;
            }
            attempt++;
            calculatedPrize/=two;
        }
        if(userWon){
            totalPrize += calculatedPrize;
            ContinuePlay=confirm('Congratulation, you won!   Your prize is:'+totalPrize+' $. Do you want to continue?');
            if(ContinuePlay){
                prize*=two;
            } 
        }
    }while(ContinuePlay);
    alert('Thank you for your participation. Your prize is: ' + totalPrize +' $');
}else{
    alert('You did not become a billionaire, but can.');
}