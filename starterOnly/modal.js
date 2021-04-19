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
const reg = /[~`!#$%\^&*+=\-\[\]\';,/{}|\":<>\?]/g;

// First Name
const first = document.querySelector("#first");
const firstlabel = document.querySelector("#firstlabel");

// Last name
const last = document.querySelector("#last");
const lastlabel = document.querySelector("#lastlabel");

function reset () {
  // Reset First name
  if (document.querySelector("#firstlabel span") != undefined) {
    firstlabel.removeChild(flspan);
  }

  // Reset Last name
  if (document.querySelector("#lastlabel span") != undefined) {
    lastlabel.removeChild(llspan);
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

      if (reg.test(firstArray[i])) {
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

      if (reg.test(lastArray[i])) {
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

});
