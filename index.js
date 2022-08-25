

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

// function redirecting to main page and auth the user
 function goToMainPage(){
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value; 

  if(email !== "" && password !== ""){
    if(document.getElementById("email").value == "test1" ||
        document.getElementById("email").value == "test2" ||
        document.getElementById("email").value == "test3" ||
        document.getElementById("email").value == "Marcin" ||
        document.getElementById("email").value == "Jonathan"
    && document.getElementById("password").value == "P@ssw0rd"){
    window.location.href = "main.html";
  }
  }else{
    window.alert("Email and Password needs to be filled.");
  }
  
 } 

 function showTable(){
  document.getElementById("resultTable").hidden = false;
 } 

 function resetFields(){
  
  document.getElementById("fromLoc").value = "";
  document.getElementById("toLoc").value = "";
  document.getElementById("fromDt").value = "";
  document.getElementById("toDt").value = "";

  document.getElementById("normal_type").checked = false;
  document.getElementById("liveAnimals_type").checked = false;
  document.getElementById("refrigirated_type").checked = false;
  
  document.getElementById("cautious_type").checked = false;
  document.getElementById("weight").value = "";
  document.getElementById("recomended").checked = false;
  document.getElementById("resultTable").hidden = true;

 } 


 function changeDateField(){
  if(document.getElementById("dateFromR").checked == true){
    document.getElementById("fromDtR").disabled = false;
  }
  else document.getElementById("fromDtR").disabled = true; 

  if(document.getElementById("dateToR").checked == true){
    document.getElementById("toDtR").disabled = false;
  }
  else document.getElementById("toDtR").disabled = true;
 }


 