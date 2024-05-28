let x = document.getElementById("myvideo");
x.playbackRate = 0.7;

pwShowHide = document.querySelectorAll(".pw_hide");




pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
      let getPwInput = icon.parentElement.querySelector("input");
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
  });
  



//   -----------loging form code--------




const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("loginbtn");
const warnig= document.getElementById("warnig");

username.value=""
password.value=""

const usernameid= "abhi"
const pass="1234"

btn.addEventListener("click",function(){
  
 if(username.value===usernameid && password.value===pass){
   btn.innerHTML="REDIRECTING TO THE PAGE..."

   setTimeout(function() {
    window.location=("encrypted.html")
   },1000);
}

else if(username.value!==usernameid && password.value!==pass){

     if(username.value==="" && password.value===""){
        warnig.style.display="flex"
        warnig.innerHTML="pls Enter your id pass";
    }

    password.value="";
    username.value="";
   warnig.style.display="flex"
    setTimeout(function(){
        warnig.style.display="none"
    },3000)
} 


}) 





// add
a=true;
var typed = new Typed('#codetext', {
     strings: ['"welcome to TextCrypto"', ' Encrypt your data safely ',' Decrypt your data safely ',
 ],
     typeSpeed: 100,
     loop:true
   });