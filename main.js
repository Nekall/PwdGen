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
  let finalPassword = '';


  for(let i = 0; i < size ;i++){
    randomChar = Math.random().toString(36).slice(3, 4);
    finalPassword += randomChar;

    if(randomBoolean() === true){
      if(randomBoolean() === true){
        finalPassword += arrSymbol.sample();
        i++;
      }else{
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
