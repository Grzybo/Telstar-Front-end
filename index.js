

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

    //const response = fetch('https://wa-tl-dk3.azurewebsites.net/api/route?type=animals&weight=20').then(response => response.json()).then(data => console.log(data));
     
    
      document.getElementById("cheapestSend").value = document.getElementById("fromDt").value
      document.getElementById("quickSend").value = document.getElementById("fromDt").value
      document.getElementById("recommendedtSend").value = document.getElementById("fromDt").value 

      const date1 = new Date(document.getElementById("fromDt").value);
      date1.setDate(date1.getDate() + 1);
      console.log(date1) 

      const date2 = new Date(document.getElementById("fromDt").value);
      date2.setDate(date2.getDate() + 2);
      console.log(date2.getDate().textInput) 

      const date3 = new Date(document.getElementById("fromDt").value);
      date3.setDate(date3.getDate() + 3);
      console.log(date3.getDate())

    
      document.getElementById("cheapestArrival").value = date3.toISOString().split('T')[0];
      document.getElementById("quickArrival").value = date1.toISOString().split('T')[0];
      document.getElementById("recommendedtArrival").value = date2.toISOString().split('T')[0];
    
      
    
    



    

  }else{
    window.alert("To perform search, all mandatory fields needs to be filled.");
  }
 }  

 function searchValidation(){
  if(
    document.getElementById("fromLoc").value != "" &&
    document.getElementById("toLoc").value != "" &&
    document.getElementById("fromDt").value != "" ||
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


function downloadFile()

{

 downloadURI("data_report.xlsx", "data_report.xlsx");

}



function downloadData() {
  var name = "data_report.xlsx";
  var link = document.createElement("a");
  link.download = name;
  link.href = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
} 

function bookDelivery(){
  if(document.getElementById("cheapest_select").checked ||
  document.getElementById("quickest_select").checked ||
  document.getElementById("recommended_select").checked){
      var name=prompt("Please enter company name");
      if(document.getElementById("recommended_select").checked){
        var discount=prompt("Please enter the dicount (%)"); 
      }
              
      var booking = ""

      if(document.getElementById("cheapest_select").checked){

        booking += "Customer name " + name + ". Send date: " +  document.getElementById("cheapestSend").value + 
          ". Arrival date: " + document.getElementById("cheapestArrival").value + ". Price: " +
          document.getElementById("cheapestPrice").value + "$."

      }else if(document.getElementById("quickest_select").checked){
        booking += "Customer name " + name + ". Send date: " +  document.getElementById("quickSend").value + 
          ". Arrival date: " + document.getElementById("quickArrival").value + ". Price: " +
          document.getElementById("quickestPrice").value + "$."

      }else if(document.getElementById("recommended_select").checked){
        booking += "Customer name " + name + ". Send date: " +  document.getElementById("recommendedtSend").value + 
          ". Arrival date: " + document.getElementById("recommendedtArrival").value + ". Price: " +
          document.getElementById("recommendedPrice").value + "$. Discount: -" + discount + "%."

      }
      
      window.alert(booking); 

      const requestOptions = {

        method: 'POST',
      
        headers: {
      
          'Content-Type': 'application/json',
      
       },
      
        body: JSON.stringify({
      
          FromLocation: document.getElementById("fromLoc").value,
      
          ToLocation: document.getElementById("toLoc").value,
      
          Bookings: []
      
         })
      
      };
      
      fetch('https://wa-tl-dk3.azurewebsites.net/api/deliveries', requestOptions).then(response => {
      
        response.json()
      
      })



      resetFields();
      
  }
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


 