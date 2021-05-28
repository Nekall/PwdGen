Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

function generatePassword() {
  let arrSymbol = ['@', '!', '}', '#', '$', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', ';', ':', ',', '.', '<', '>', '/', '?'];
  let randomChar = Math.random().toString(36).slice(2, 3);
  let size = [14, 15, 16, 17, 18, 19].sample();
  let finalPassword = '';


  for(let i = 0; i < size ;i++){
    let randomBoolean = (Math.random() >= 0.5);
    randomChar = Math.random().toString(36).slice(2, 3);
    finalPassword += randomChar;
    if(randomBoolean === true){
      if(randomBoolean === true){
        finalPassword += randomChar.toUpperCase();
        i++;
      }
    }
    if(randomBoolean === true){
      if(randomBoolean === true){
        finalPassword += arrSymbol.sample();
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
