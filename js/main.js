// Start form validation
var elName = document.getElementById('name');
var elEmail = document.getElementById('email');
var elSubject = document.getElementById('subject');
var elMessage = document.getElementById('message');
const patranEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// Flaid name
elName.addEventListener('blur' ,(e)=>{
  e.preventDefault();
  if (elName.value.length > 4){
      

      var text = "";
      e.target.style.border="2px solid rgb(44 235 41 / 95%)";
      document.getElementById("alert-name").innerHTML = text;
  }
  else{
      var text = "It must be more than three and less than ten characters";
      e.target.style.border="2px solid rgb(255 0 0 / 95%)";
      document.getElementById("alert-name").innerHTML = text;
  }
});
// Flaid email
elEmail.addEventListener('blur' ,(e)=>{
  e.preventDefault();
  if (elEmail.value.match(patranEmail)){
      var text = "";
      e.target.style.border="2px solid rgb(44 235 41 / 95%)";
      document.getElementById("alert-email").innerHTML = text;
  }
  else{
      var text = "There is an email error please re-write another time";
      e.target.style.border="2px solid rgb(255 0 0 / 95%)";
      document.getElementById("alert-email").innerHTML = text;
  }
});

// Flaid subject
elSubject.addEventListener('blur' ,(e)=>{
  e.preventDefault();
  if (elSubject.value.length>10 && elSubject.value.length<20){
      var text = "";
      e.target.style.border="2px solid rgb(44 235 41 / 95%)";
      document.getElementById("alert-subject").innerHTML = text;
  }
  else{
      var text = "Please write the subject valid";
      e.target.style.border="2px solid rgb(255 0 0 / 95%)";
      document.getElementById("alert-subject").innerHTML = text;
  }
});

// Flaid Message
elMessage.addEventListener('blur' ,(e)=>{
  e.preventDefault();
  if (elMessage.value.length > 20){
      var text = "";
      e.target.style.border="2px solid rgb(44 235 41 / 95%)";
      document.getElementById("alert-message").innerHTML = text;
  }
  else{
      var text = "Please write the subject valid";
      e.target.style.border="2px solid rgb(255 0 0 / 95%)";
      document.getElementById("alert-message").innerHTML = text;
  }
});
// End form validation