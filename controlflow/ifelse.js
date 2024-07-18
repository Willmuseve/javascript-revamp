let password = "12345678@"

if(password.length >= 8 && password.includes("@")){
    console.log('STRONG')
}
else if(password.length >= 5 && password.length <= 8 ){
    console.log("MEDIUM")
}
else{
    console.log('WEAK')
}



//this tasks utilises if else statement to check if 
//given password is strong or wear