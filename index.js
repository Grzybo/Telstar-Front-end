

//tab handlning function
function openTab(evt, tabName) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.className += " active";
 }   


 function goToMainPage(){
  
  //validation
  if(document.getElementById("email").value == "admin" &&
  document.getElementById("password").value == "admin"){
    window.location.href = "index.html";
  }

  
  
  
 }


 