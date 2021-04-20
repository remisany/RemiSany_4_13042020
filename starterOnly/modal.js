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
    for (i=0; i<inputs.length; i++) {
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

//First Name
const first = document.querySelector("#first");
const firstlabel = document.querySelector("#firstlabel");

//Last name
const last = document.querySelector("#last");
const lastlabel = document.querySelector("#lastlabel");

//Email
const email = document.querySelector("#email");
const emaillabel = document.querySelector("#emaillabel");
const regemail = /[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/g;

//Birthdate
const birth = document.querySelector("#birthdate");
const birthlabel = document.querySelector("#birthlabel");

//Quantity
const quantity = document.querySelector("#quantity");
const quantitylabel = document.querySelector("#quantitylabel");

//Radios
const radioslabel = document.querySelector("#radioslabel");

//Checkbox 1
const checkbox1 = document.querySelector("#checkbox1");
const checkbox1label = document.querySelector("#checkbox1label");

//Reset
function reset () {
  flag = 0;
  beforesubmit = 0;

  //Reset First name
  if (document.querySelector("#firstlabel span") != undefined) {
    firstlabel.removeChild(flspan);
  }

  //Reset Last name
  if (document.querySelector("#lastlabel span") != undefined) {
    lastlabel.removeChild(llspan);
  }

  //Reset Birthdate
  if (document.querySelector("#emaillabel span") != undefined) {
    emaillabel.removeChild(elspan);
  }

  //Reset Birthdate
  if (document.querySelector("#birthlabel span") != undefined) {
    birthlabel.removeChild(blspan);
  }

  //Reset Quantity
  if (document.querySelector("#quantitylabel span") != undefined) {
    quantitylabel.removeChild(qlspan);
  }

  //Reset Radios
  if (document.querySelector("#radioslabel span") != undefined) {
    radioslabel.removeChild(rlspan);
  }

  //Reset Checkbox 1
  if (document.querySelector("#checkbox1label #clspan") != undefined) {
    checkbox1label.removeChild(clspan);
  }
};

form.addEventListener("click", function(event){
  reset();

  //First name verification
  flspan = firstlabel.appendChild(document.createElement("span"));

  const firstvalue = first.value;
  const firstlength = firstvalue.length;
  const firstArray = firstvalue.split("");

  if (firstlength >= 2) {
    for (i=0; i<firstlength; i++) {
      if (isNaN(parseInt(firstArray[i])) == false) {
        flspan.innerHTML=" Le champ ne doit contenir aucun chiffre !";
        flag = 1;
      }

      if (regname.test(firstArray[i])) {
        flspan.innerHTML=" Le champ contient un caractère non accepté !";
        flag = 1;
      }
    }

    if (flag == 0) {
      flspan.classList.add("correct");
      flspan.innerHTML=" Le champ est correct";
      flag = 0;
      beforesubmit++;
    }

  } else if (firstlength != 0) {
    flspan.innerHTML=" Le champ est trop court !";
  } else {
    flspan.innerHTML=" Le champ est obligatoire !";
  }

  //Last name verification
  llspan = lastlabel.appendChild(document.createElement("span"));

  const lastvalue = last.value;
  const lastlength = lastvalue.length;
  const lastArray = lastvalue.split("");

  if (lastlength >= 2) {
    for (i=0; i<lastlength; i++) {
      if (isNaN(parseInt(lastArray[i])) == false) {
        llspan.innerHTML=" Le champ ne doit contenir aucun chiffre !";
        flag = 1;
      }

      if (regname.test(lastArray[i])) {
        llspan.innerHTML=" Le champ contient un caractère non accepté !";
        flag = 1;
      }
    }

    if (flag == 0) {
      llspan.classList.add("correct");
      llspan.innerHTML=" Le champ est correct";
      flag = 0;
      beforesubmit++;
    }

  } else if (lastlength != 0) {
    llspan.innerHTML=" Le champ est trop court !";
  } else {
    llspan.innerHTML=" Le champ est obligatoire !";
  }

  //Email verification
  elspan = emaillabel.appendChild(document.createElement("span"));

  const emailvalue = email.value;
  const emaillength = emailvalue.length;

  if (emaillength != 0) {
    if (emailvalue.match(regemail)) {
      elspan.classList.add("correct");
      elspan.innerHTML=" Le champ est correct";
      beforesubmit++;
    } else {
      elspan.innerHTML=" L'adresse mail est invalide !";
    }
  } else {
    elspan.innerHTML=" Le champ est obligatoire !";
  }

  //Birthdate verification
  blspan = birthlabel.appendChild(document.createElement("span"));

  const birthvalue = birth.value;
  const birthlength = birthvalue.length;
  
  if (birthlength == 0) {
    blspan.innerHTML=" Le champ est obligatoire !";
  } else {
    blspan.classList.add("correct");
    blspan.innerHTML=" Le champ est correct";
    beforesubmit++;
  }

  //Quantity verification
  qlspan = quantitylabel.appendChild(document.createElement("span"));

  const quantityvalue = quantity.value;
  const quantitylength = quantityvalue.length;
  
  if (quantitylength == 0) {
    qlspan.innerHTML=" Le champ est obligatoire !";
  } else {
    qlspan.classList.add("correct");
    qlspan.innerHTML=" Le champ est correct";
    beforesubmit++;
  }

  //Location verification
  const radios = document.getElementsByName("location");
  rlspan = radioslabel.appendChild(document.createElement("span"));

  const radioslength = radios.length;
  var cpt = 0;

  for (i=0; i<radioslength; i++) {
    if (radios[i].checked == true) {
      cpt++;
    }
  }

  if ((cpt == quantityvalue) && (quantityvalue !== "")) {
    rlspan.classList.add("correct");
    rlspan.innerHTML=" Le champ est correct";
    beforesubmit++;
  } else if ((quantityvalue == "") && (cpt == 0)){
    rlspan.innerHTML="";
  } else {
    rlspan.innerHTML=" Le nombre de ville selectionné est incorrect !";
  }

  //Checkbox 1 verification
  clspan = document.createElement("span");
  clspan.setAttribute("id", "clspan");
  clspan = checkbox1label.appendChild(clspan);

  if (checkbox1.checked == false) {
    clspan.innerHTML=" L'acceptation est obligatoire !";
  } else {
    clspan.classList.add("correct");
    clspan.innerHTML=" Le champ est correct";
    beforesubmit++;
  }

  event.preventDefault();

  //Submit
  if (beforesubmit == 7) {
    validate();
  }
});