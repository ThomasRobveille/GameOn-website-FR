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
        saveData()
        return alert("le prénom ne peut contenir des chiffres")
      }
    } else if(formData[i].id === "last"){
        if(isValid(formData[i].value)){
          Person.last = formData[i].value
        } else{
          saveData()
          return alert("le nom ne peut contenir des chiffres")
        }
    } else if(formData[i].id === "email"){
      Person.email = formData[i].value
    } else if(formData[i].id === "birthdate"){
        if(dateValid(formData[i].valueAsNumber)){
          Person.birthdate = formData[i].value
        } else {
          saveData()
          return alert("cette date est dans le future")
        }      
    } else if(formData[i].id === "quantity"){
      Person.quantity = formData[i].value
    }
  }

  let city = document.querySelector('input[name="location"]:checked').value;
  if(!document.querySelector('input[name="location"]:checked')){
    saveData()
    return alert("veuillez sélectionner une ville")
  }
  else{
    Person.city = city
  }

  if(document.getElementById('checkbox1').checked){
    Person.cgu = true;
  }
  else {
    saveData()
    return alert("veuillez accepter les CGU")
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
 // Regex pour vérifier que le nom et le prénom soit sans chiffre
function isValid(value){
  if(/[a-z]+/g.test(value)){
    return true
  }
}

//fonction de test de date
function dateValid(value){
  if(value < Date.now()){
    return true
  } else {
    return false
  }  
}

//Sauvegarde des données déjà rempli
function saveData(){
  let Session = sessionStorage;
  for(i = 0; i < formData.length; i++){
    if(formData[i].id === "first"){
      if(isValid(formData[i].value)){
        Session.setItem('first', formData[i].value) 
      }
    } else if(formData[i].id === "last"){
      if(isValid(formData[i].value)){
        Session.setItem('last', formData[i].value) 
      }
    } else if(formData[i].id === "email"){
      Session.setItem('email', formData[i].value) 
    } else if(formData[i].id === "birthdate"){
      if(dateValid(formData[i].valueAsNumber)){
        Session.setItem('birthday', formData[i].value) 
      }   
    } else if(formData[i].id === "quantity"){
      Session.setItem('quantity', formData[i].value) 
    }
  }

  let city = document.querySelector('input[name="location"]:checked').value;
  if(document.querySelector('input[name="location"]:checked')){
    Session.setItem('city', city) 
  }

  if(document.getElementById('checkbox1').checked){
    Session.setItem('cgu', true) 
  }

  if(document.getElementById('checkbox2').checked){
    Session.setItem('newsletter', true) 
  }
  else {
    Session.setItem('newsletter', false) 
  }
}

//restauration du formulaire
function setForm(){
  let Session = sessionStorage;
  for(i = 0; i < formData.length; i++){
    if(formData[i].id === "first"){
      formData[i].value = Session.getItem('first')  
    } else if(formData[i].id === "last"){      
      formData[i].value = Session.getItem('last')      
    } else if(formData[i].id === "email"){
      formData[i].value = Session.getItem('email')  
    } else if(formData[i].id === "birthdate"){
      formData[i].value = Session.getItem('birthday')      
    } else if(formData[i].id === "quantity"){
      formData[i].value = Session.getItem('quantity')  
    }
  }

  let city = Session.getItem('city')
  if(city == "New York"){
    document.getElementById('location1').checked = true
  } else if (city == "San Francisco") {
    document.getElementById('location2').checked = true
  } else if (city == "Seattle") {
    document.getElementById('location3').checked = true
  } else if (city == "Chicago") {
    document.getElementById('location4').checked = true
  } else if (city == "Boston") {
    document.getElementById('location5').checked = true
  } else if (city == "Portland") {
    document.getElementById('location6').checked = true
  }

  if(Session.getItem('cgu')){
    document.getElementById('checkbox1').checked = true
  } else {
    document.getElementById('checkbox1').checked = false
  }

  if(Session.getItem('newsletter')){
    document.getElementById('checkbox2').checked = true
  } else {
    document.getElementById('checkbox2').checked = false
  }
}
