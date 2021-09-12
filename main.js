Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

function randomBoolean(){
  return (Math.random() >= 0.5);
};

function generatePassword() {
  let arrSymbol = ['@', '!', '}', '#', '$', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', ';', ':', ',', '.', '/', '?'];
  let randomChar = Math.random().toString(36).slice(2, 3);
  let finalPassword = "";
  let needCapital = document.getElementById("capital").checked;
  let needSpecial = document.getElementById("special").checked;


  while(finalPassword.length < 15){
    randomChar = Math.random().toString(36).slice(3, 4);
    finalPassword += randomChar;

    if(randomBoolean() === true && needSpecial === true && finalPassword.length < 15){
      if(randomBoolean() === true){
        finalPassword += arrSymbol.sample();
      }
    }

    if(randomBoolean() === true && needCapital === true && finalPassword.length < 15){
      if(randomBoolean() === true){
        finalPassword += randomChar.toUpperCase();
      }
    }
  }
  
  document.getElementById("password").innerHTML = finalPassword;
};

function copyPassword() {
  let copyText = document.getElementById("password");
  navigator.clipboard.writeText(copyText.innerHTML);

  document.getElementById("copied").classList.add("active")
  setInterval(function(){ document.getElementById("copied").classList.remove("active"); }, 2000);
};

window.onload = function() {
  generatePassword(); //launch one time for the first password
};
