Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

function randomBoolean(){
  return (Math.random() >= 0.5);
};

function generatePassword() {
  let arrSymbol = ['@', '!', '}', '#', '$', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', ';', ':', ',', '.', '>', '/', '?'];
  let randomChar = Math.random().toString(36).slice(2, 3);
  let size = 15;
  let finalPassword = "";
  let needCapital = document.getElementById("capital");
  let needSpecial = document.getElementById("special");


  for(let i = 0; i < size ;i++){
    randomChar = Math.random().toString(36).slice(3, 4);
    finalPassword += randomChar;

    if(randomBoolean() === true && needSpecial.checked === true){
      if(randomBoolean() === true){
        finalPassword += arrSymbol.sample();
        i++;
      }
    }

    if(randomBoolean() === true && needCapital.checked === true){
      if(randomBoolean() === true){
        finalPassword += randomChar.toUpperCase();
        i++;
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
  generatePassword(); //launch ine time for the first password
};
