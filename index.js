

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
  if(searchValidation()){
    document.getElementById("resultTable").hidden = false;

    const response = fetch('https://wa-tl-dk3.azurewebsites.net/api/route?type=animals&weight=20').then(response => response.json()).then(data => console.log(data));
     

    // var dateToEl = document.getElementById("toDt");
    // var dateFromEl = document.getElementById("fromDt"); 

    // document.getElementById("quickestSend").value = dateToEl.value;
    // document.getElementById("quickestSend").value = dateToEl.value;
    // document.getElementById("quickestSend").value = dateToEl.value;



    

  }else{
    window.alert("To perform search, all mandatory fields needs to be filled.");
  }
 }  

 function searchValidation(){
  if(
    document.getElementById("fromLoc").value != "" &&
    document.getElementById("toLoc").value != "" &&
    document.getElementById("fromDt").value != "" &&
    document.getElementById("toDt").value != "" &&
    document.getElementById("weight").value != "" &&
    document.getElementById("normal_type").checked == true ||
    document.getElementById("liveAnimals_type").checked == true ||
    document.getElementById("refrigirated_type").checked == true
  ){
    return true;
  }
  else return false;
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

  document.getElementById("fromDt").disabled = false;
  document.getElementById("toDt").disabled = false;

 } 


 function changeDateField(){
  if(document.getElementById("dateFromR").checked == true){
    document.getElementById("fromDtR").disabled = false;
  }
  else {
    document.getElementById("fromDtR").disabled = true; 
    document.getElementById("fromDtR").value = "";
  } 

  if(document.getElementById("dateToR").checked == true){
    document.getElementById("toDtR").disabled = false;
  }
  else{
    document.getElementById("toDtR").disabled = true;
    document.getElementById("toDtR").value = "";
  } 
 } 


 function fillTable(){

 } 

 function download(filename, textInput) {

  var element = document.createElement('a');
  element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
  element.setAttribute('download', filename);
  document.body.appendChild(element);
  element.click();
}

function dataReport(){

    var link = document.createElement("a");
    link.download = "data_report.xlsx";
    link.href = "data_report.xlsx";
    link.click();

}


 //######################################################################################
 // dates validation
  //######################################################################################
 function dateToValidation(){
  
  var dateToEl = document.getElementById("toDt");
  var dateFromEl = document.getElementById("fromDt");
  var today = new Date();
  var to =  new Date(String(dateToEl.value));


  if(to < today){
    window.alert("You cannot select date ealier than today's date.");
    dateToEl.value = "";
  }

  

  if(dateFromEl.value !== "" &&  dateToEl .value !== ""){
    if(dateToEl.value <= dateFromEl.value){
      dateToEl.value = "";
      window.alert("You cannot select delivery date ealier than sending date.");
    }
  }

  dateFromEl.disabled = true;

 } 

 function dateFromValidation(){
  
  var dateToEl = document.getElementById("toDt");
  var dateFromEl = document.getElementById("fromDt");
  var today = new Date();
  var from =  new Date(String(dateFromEl.value));

  if(from < today){
    window.alert("You cannot select date ealier than today's date.");
    dateFromEl.value = "";
  } 

  if(dateFromEl.value !== "" &&  dateToEl .value !== ""){
    if(dateToEl.value <= dateFromEl.value){
      dateToEl.value = "";
      window.alert("You cannot select delivery date ealier than sending date.");
    }
  } 

  dateToEl.disabled = true;

 } 
 
 function reportDateValidation(){

  var dateToEl = document.getElementById("toDtR");
  var dateFromEl = document.getElementById("fromDtR");

  if(dateFromEl.value !== "" &&  dateToEl .value !== ""){
    if(dateToEl.value <= dateFromEl.value){
      dateToEl.value = "";
      window.alert("You cannot select delivery date ealier than sending date.");
    }
  }
 }


 