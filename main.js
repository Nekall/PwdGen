randomBoolean=()=>{return (Math.random() >= 0.5)};

const generatePassword=()=>{
  let arrSymbol = ['@', '!', '}', '#', '$', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', ';', ':', ',', '.', '/', '?'];
  let randomChar = Math.random().toString(36).slice(2, 3);
  let finalPassword = "";
  let needCapital = document.getElementById("capital").checked;
  let needSpecial = document.getElementById("special").checked;
  let withoutNumber = document.getElementById("number").checked;

  const setupPassword=()=>{
    while(finalPassword.length < 15){
      randomChar = Math.random().toString(36).slice(3, 4);
      // Wihtout Number
      if(withoutNumber && !isNaN(Number(randomChar)) && finalPassword.length < 15)setupPassword(); 
      // Length
      if(finalPassword.length < 15){
        finalPassword += randomChar;
      }else{
        break;
      } 
      // Special
      if(randomBoolean() && needSpecial && finalPassword.length < 15){
        if(randomBoolean())finalPassword += arrSymbol[Math.floor(Math.random() * arrSymbol.length)];
      }
      // Capital
      if(randomBoolean() && needCapital && finalPassword.length < 15){
        if(randomBoolean())finalPassword += randomChar.toUpperCase();
      }
    }
  }
  setupPassword();
  document.getElementById("password").innerHTML = finalPassword;
};

const copyPassword=()=>{
  let copyText = document.getElementById("password");
  navigator.clipboard.writeText(copyText.innerHTML);
};

window.onload=()=>generatePassword(); //launch one time for the first password

