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

// Start Image Effect



// End Image Effect

// Start dark mode
function myFunction() {
  var elbody = document.body;
  var elabout = document.getElementById("about");
  var eltimeline = document.getElementById("timeline-box");
  var elcontact = document.getElementById("contact");
  var elwork1 = document.getElementById("work-card1");
  var elwork2 = document.getElementById("work-card2");
  var elwork3 = document.getElementById("work-card3");
  var elcard1 = document.getElementById("icon-card1");
  var elcard2 = document.getElementById("icon-card2");
  var elcard3 = document.getElementById("icon-card3");
  elbody.classList.toggle("dark-mode");
  elabout.classList.toggle("dark-mode");
  eltimeline.classList.toggle("dark-mode");
  elcontact.classList.toggle("dark-mode");
  elwork1.classList.toggle("dark-mode");
  elwork2.classList.toggle("dark-mode");
  elwork3.classList.toggle("dark-mode");
  elcard1.classList.toggle("dark-mode");
  elcard2.classList.toggle("dark-mode");
  elcard3.classList.toggle("dark-mode");
  elName.classList.toggle("dark-mode");
  elEmail.classList.toggle("dark-mode");
  elSubject.classList.toggle("dark-mode");
  elMessage.classList.toggle("dark-mode");
  
}
// End dark mode