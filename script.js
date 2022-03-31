//Password Generating functon//
function genPassword(){
var password =  document.getElementById("#password");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";
   for(i=0; i<=passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length)
            password = chars.substring(randomNumber, randomNumber+1) + password;
   }
    document.getElementById("password").value = password;
}

//Copy password function//
    function copyPassword(){
        var copyText = document.getElementById("password");
        copyText.select();
        document.execCommand('copy');  
    }

//End-of-code//