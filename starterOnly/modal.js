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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
const cross = document.querySelector(".close");

cross.addEventListener("click", function(){
  modalbg.style.display = "none";
});

// Form
const form = document.querySelector(".btn-submit");

// First name & Last Name
const regname = /[\\\^\$\*\+\?\.\(\)\|\[\]\{\}\-&~"#'`_@=¨£%µ,;/:§!]/g;

// First Name
const first = document.querySelector("#first");
const firstlabel = document.querySelector("#firstlabel");

// Last name
const last = document.querySelector("#last");
const lastlabel = document.querySelector("#lastlabel");

// Email
const email = document.querySelector("#email");
const emaillabel = document.querySelector("#emaillabel");
const regemail = /[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/g;

// Birthdate
const birth = document.querySelector("#birthdate");
const birthlabel = document.querySelector("#birthlabel");

// Quantity
const quantity = document.querySelector("#quantity");
const quantitylabel = document.querySelector("#quantitylabel");

// Reset
function reset () {
  // Reset First name
  if (document.querySelector("#firstlabel span") != undefined) {
    firstlabel.removeChild(flspan);
  }

  // Reset Last name
  if (document.querySelector("#lastlabel span") != undefined) {
    lastlabel.removeChild(llspan);
  }

  // Reset Birthdate
  if (document.querySelector("#emaillabel span") != undefined) {
    emaillabel.removeChild(elspan);
  }

  // Reset Birthdate
  if (document.querySelector("#birthlabel span") != undefined) {
    birthlabel.removeChild(blspan);
  }

  // Reset Quantity
  if (document.querySelector("#quantitylabel span") != undefined) {
    quantitylabel.removeChild(qlspan);
  }

}


form.addEventListener("click", function(event){
  event.preventDefault();

  reset();

  var flag = 0;

  // First name verification
  flspan = firstlabel.appendChild(document.createElement("span"));

  const firstvalue = first.value;
  const firstlength = firstvalue.length;
  const firstArray = firstvalue.split("");

  if (firstlength >= 2) {
    for (i=0; i<firstlength; i++) {
      if (isNaN(parseInt(firstArray[i])) == false) {
        flspan.innerHTML=" Le champ ne doit contenir aucun chiffre !";
        event.preventDefault();
        flag = 1;
      }

      if (regname.test(firstArray[i])) {
        flspan.innerHTML=" Le champ contient un caractère non accepté !";
        event.preventDefault();
        flag = 1;
      }
    }

    if (flag == 0) {
      flspan.classList.add("correct");
      flspan.innerHTML=" Le champ est correct !";
      flag = 0;
    }

  } else if (firstlength != 0) {
    flspan.innerHTML=" Le champ est trop court !";
    event.preventDefault();
  } else {
    flspan.innerHTML=" Le champ est obligatoire !";
    event.preventDefault();
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
        event.preventDefault();
        flag = 1;
      }

      if (regname.test(lastArray[i])) {
        llspan.innerHTML=" Le champ contient un caractère non accepté !";
        event.preventDefault();
        flag = 1;
      }
    }

    if (flag == 0) {
      llspan.classList.add("correct");
      llspan.innerHTML=" Le champ est correct !";
      flag = 0;
    }

  } else if (lastlength != 0) {
    llspan.innerHTML=" Le champ est trop court !";
    event.preventDefault();
  } else {
    llspan.innerHTML=" Le champ est obligatoire !";
    event.preventDefault();
  }

  //Email verification
  elspan = emaillabel.appendChild(document.createElement("span"));

  const emailvalue = email.value;
  const emaillength = emailvalue.length;

  if (emaillength != 0) {
    if (emailvalue.match(regemail)) {
      elspan.classList.add("correct");
      elspan.innerHTML=" Le champ est correct !";
    } else {
      elspan.innerHTML=" L'adresse mail est invalide !";
      event.preventDefault();
    }
  } else {
    elspan.innerHTML=" Le champ est obligatoire !";
    event.preventDefault();
  }

  //Birthdate verification
  blspan = birthlabel.appendChild(document.createElement("span"));

  const birthvalue = birth.value;
  const birthlength = birthvalue.length;
  
  if (birthlength == 0) {
    blspan.innerHTML=" Le champ est obligatoire !";
    event.preventDefault();
  } else {
    blspan.classList.add("correct");
    blspan.innerHTML=" Le champ est correct !";
  }

  //Quantity verification
  qlspan = quantitylabel.appendChild(document.createElement("span"));

  const quantityvalue = quantity.value;
  const quantitylength = quantityvalue.length;
  
  if (quantitylength == 0) {
    qlspan.innerHTML=" Le champ est obligatoire !";
    event.preventDefault();
  } else {
    qlspan.classList.add("correct");
    qlspan.innerHTML=" Le champ est correct !";
  }

});
