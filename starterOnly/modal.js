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

// RS
const cross = document.querySelector(".close");

// close modal form
cross.addEventListener("click", function(){
  modalbg.style.display = "none";
});

// Form
const form = document.querySelector(".btn-submit");

// Prénom & Nom
const reg = /[~`!#$%\^&*+=\-\[\]\';,/{}|\":<>\?]/g;

// Prénom
const first = document.querySelector("#first");
const firstlabel = document.querySelector("#firstlabel");

// Nom
const last = document.querySelector("#last");
const lastlabel = document.querySelector("#lastlabel");

function reset () {
  //Reset prénom
  if (document.querySelector("#firstlabel span") != undefined) {
    firstlabel.removeChild(flspan);
  }

  //Reset Nom
  if (document.querySelector("#lastlabel span") != undefined) {
    lastlabel.removeChild(llspan);
  }
}


form.addEventListener("click", function(event){
  event.preventDefault();

  reset();
  
  var flag = 0;

  //Vérifcation prénom
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

  //Vérification nom
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
