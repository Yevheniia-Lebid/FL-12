let email = '',
    password = '',
    oldpassword = '',
    newpassword1 = '',
    newpassword2 = '',
    decision = false;
const EmailMinLength = 5,
      PasswordMinLength = 6;
email = prompt('Enter e-mail :');
if ( email === null || email === '' ){
    alert('Canceled.');
} else if ( email.length < EmailMinLength ){
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if ( email === 'user@gmail.com'|| email === 'admin@gmail.com'){
    password = prompt('Enter password: ');
    if ( password === null || password === '' ){
        alert('Canceled.');  
    } else if(email === 'user@gmail.com' && password ==='UserPass'
             || email === 'admin@gmail.com' && password ==='AdminPass'){
        decision = confirm('Do you want to change your password?');
        if(decision === false){
            alert('You have failed the change.');
        } else {
            oldpassword = prompt('Enter your old password:');
            if ( oldpassword === null || oldpassword === '' ){
                alert('Canceled.'); 
            }else if (email === 'user@gmail.com' && oldpassword ==='UserPass' 
                      || email === 'admin@gmail.com' && oldpassword ==='AdminPass'){
                newpassword1 = prompt('Enter a new password');
                if ( newpassword1 === null || newpassword1 === '' ){
                    alert('Canceled');
                } else if (newpassword1.length < PasswordMinLength){
                    alert('It’s too short password. Sorry.');
                } else {
                    newpassword2 = prompt('Re-enter the new password');
                    if (newpassword1 === newpassword2){
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else{
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}