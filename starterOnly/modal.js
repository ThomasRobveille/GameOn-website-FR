function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.getElementsByClassName("text-control");
const modalClose = document.querySelector("#close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

modalClose.onclick = closeModal; 

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Ferme la modal au click sur la croix
function closeModal() {
  modalbg.style.display = "none";
}

// Form answer 
function testData() {
  let Person = new Object();
  for(i = 0; i < formData.length; i++){
    if(formData[i].id === "first"){
      if(isValid(formData[i].value)){
        Person.first = formData[i].value
      } else{
        return alert("le prénom ne peut contenir des chiffres")
      }
    } else if(formData[i].id === "last"){
      if(isValid(formData[i].value)){
        Person.last = formData[i].value
      } else{
        return alert("le prénom ne peut contenir des chiffres")
      }
    } else if(formData[i].id === "email"){
      Person.email = formData[i].value
    } else if(formData[i].id === "birthdate"){
      if(dateValid(formData[i].valueAsNumber)){
        Person.birthdate = formData[i].value
      } else {
        return alert("cette date est dans le future")
      }      
    } else if(formData[i].id === "quantity"){
      Person.quantity = formData[i].value
    }
  }

  let city = document.querySelector('input[name="location"]:checked').value;
  if(!document.querySelector('input[name="location"]:checked')){
    return alert("veuillez sélectionner une ville")
  }
  else{
    Person.city = city
  }

  if(document.getElementById('checkbox1').checked){
    Person.cgu = true;
  }
  else {
    alert("veuillez accepter les CGU")
  }

  if(document.getElementById('checkbox2').checked){
    Person.newsletter = true
  }
  else {
    Person.newsletter = false
  }

  alert("bravo c'est un succès")
  console.log(Person);
  console.log(Person.city);
  console.log(Person.cgu);
  console.log(Person.newsletter);
}
 // Regex pour vérifier que le nom soit sans chiffre
function isValid(value){
  if(/[a-z]+/g.test(value)){
    return true
  }
}

//fonction de test de date
function dateValid(value){
  console.log(value)
  console.log(Date.now())
  if(value < Date.now()){
    return true
  } else {
    return false
  }  
}
