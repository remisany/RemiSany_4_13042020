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
const formData = document.querySelectorAll(".formData");

const validation = document.querySelector("#validation");
const question = document.querySelector("#question");

const inputs = document.getElementsByTagName("input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  validation.style.display = "none";
  question.style.display = "block";
}

//Close modal form
const cross = document.querySelector(".close");

cross.addEventListener("click", function(){
  modalbg.style.display = "none";
});

//Validation
function validate() {
  validation.style.display = "block";
  question.style.display = "none";
  clear();
}

//Close Validation
const btnclose = document.querySelector(".btn-close");

btnclose .addEventListener("click", function(){
  modalbg.style.display = "none";
});

//Clear
function clear() {
  reset();
  if (inputs.length != 0) {
    for (i=0; i<inputs.length-1; i++) {
      inputs[i].value = "";
      inputs[i].checked = false;
    }
  }
}

//Form
const form = document.querySelector("#submit");
var flag = 0;
var beforesubmit = 0;

//First name & Last Name
const regname = /[\\\^\$\*\+\?\.\(\)\|\[\]\{\}\-&~"#'`_@=¨£%µ,;/:§!]/g;

//Email
const regemail = /[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/g;

//Reset
function reset () {
  flag = 0;
  beforesubmit = 0;

  for (i=0; i<formData.length; i++) {
      inputs[i].classList.remove("correct");
      inputs[i].classList.remove("incorrect");

    if (formData[i].lastElementChild.nodeName == "DIV") {
      formData[i].removeChild(formData[i].lastChild);
    }
  }
};

form.addEventListener("click", function(event){
  reset();

  //First name & Last name verification
  for (i=0; i<2; i++) {

    div = document.createElement("div");
    div = formData[i].appendChild(div);

    const namevalue = inputs[i].value;
    const namelength = namevalue.length;
    const nameArray = namevalue.split("");
  
    if (namelength >= 2) {
      for (let i=0; i<namelength; i++) {
        if (isNaN(parseInt(nameArray[i])) == false) {
          div.innerHTML=" Le champ ne doit contenir aucun chiffre !";
          inputs[i].classList.add("incorrect");
          flag = 1;
        }
  
        if (regname.test(nameArray[i])) {
          div.innerHTML=" Le champ contient un caractère non accepté !";
          inputs[i].classList.add("incorrect");
          flag = 1;
        }
      }
  
      if (flag == 0) {
        inputs[i].classList.add("correct");
        console.log("oui")
        flag = 0;
        beforesubmit++;
      }
  
    } else if (namelength != 0) {
      div.innerHTML=" Le champ est trop court !";
      inputs[i].classList.add("incorrect");
    } else {
      div.innerHTML=" Le champ est obligatoire !";
      inputs[i].classList.add("incorrect");
    }
  }
  
  //Email verification
  div = document.createElement("div");
  div = formData[2].appendChild(div);

  const emailvalue = inputs[2].value;
  const emaillength = emailvalue.length;

  if (emaillength != 0) {
    if (emailvalue.match(regemail)) {
      inputs[2].classList.add("correct");
      beforesubmit++;
    } else {
      div.innerHTML=" L'adresse mail est invalide !";
      inputs[2].classList.add("incorrect");
    }
  } else {
    div.innerHTML=" Le champ est obligatoire !";
    inputs[2].classList.add("incorrect");
  }

  //Birthdate verification
  div = document.createElement("div");
  div = formData[3].appendChild(div);

  const birthvalue = inputs[3].value;
  const birthlength = birthvalue.length;
  
  if (birthlength == 0) {
    div.innerHTML=" Le champ est obligatoire !";
    inputs[3].classList.add("incorrect");
  } else {
    inputs[3].classList.add("correct");
    beforesubmit++;
  }

  //Quantity verification
  div = document.createElement("div");
  div = formData[4].appendChild(div);

  const quantityvalue = inputs[4].value;
  const quantitylength = quantityvalue.length;
  
  if (quantitylength == 0) {
    div.innerHTML=" Le champ est obligatoire !";
    inputs[4].classList.add("incorrect");
  } else {
    inputs[4].classList.add("correct");
    beforesubmit++;
  }

  //Location verification
  const radios = document.getElementsByName("location");

  div = document.createElement("div");
  div = formData[5].appendChild(div);

  const radioslength = radios.length;
  var cpt = 0;

  for (i=0; i<radioslength; i++) {
    if (radios[i].checked == true) {
      cpt++;
    }
  }

  if ((cpt == quantityvalue) && (quantityvalue !== "")) {
    inputs[5].classList.add("correct");
    beforesubmit++;
  } else if ((quantityvalue == "") && (cpt == 0)){
    div.innerHTML="";
  } else {
    div.innerHTML=" Le nombre de ville selectionné est incorrect !";
  }

  //Checkbox 1 verification
  div = document.createElement("div");
  div = formData[6].appendChild(div);

  if (checkbox1.checked == false) {
    div.innerHTML=" L'acceptation des conditions d'utilisation est obligatoire !";
  } else {
    inputs[6].classList.add("correct");
    beforesubmit++;
  }

  event.preventDefault();

  //Submit
  if (beforesubmit == 7) {
    validate();
  }
});