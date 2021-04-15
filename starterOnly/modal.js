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

const first = document.querySelector("#first");
const firstlabel = document.querySelector("#firstlabel");
const last = document.querySelector("#last");
const lastlabel = document.querySelector("#lastlabel");
const email = document.querySelector("#email");
const emaillabel = document.querySelector("#emaillabel");

function reset () {
  if (document.querySelector("#firstlabel span") != undefined) {
    firstlabel.removeChild(flspan);
  }
  if (document.querySelector("#lastlabel span") != undefined) {
    lastlabel.removeChild(llspan);
  }
  if (document.querySelector("#emaillabel span") != undefined) {
    emaillabel.removeChild(elspan);
  }
}

form.addEventListener("click", function(event){
  event.preventDefault();

  reset();

  if (first.value == "") {
    flspan = firstlabel.appendChild(document.createElement("span"));
    flspan.innerHTML=" Le champ est obligatoire !";
  } else if (first.value.length < 2) {
    flspan = firstlabel.appendChild(document.createElement("span"));
    flspan.innerHTML=" Le champ est trop court !";
  } else if (isNaN(first.value) == false) {
    flspan = firstlabel.appendChild(document.createElement("span"));
    flspan.innerHTML=" Le champ ne doit contenir aucun chiffre !";
  } else {
    flspan = firstlabel.appendChild(document.createElement("span"));
    flspan.classList.add("correct");
    flspan.innerHTML=" Le champ est correct !";
  }

  ;

    event.preventDefault();


  
});
