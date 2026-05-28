



window.onload = function(){

  setTimeout(() => {

    const loader =
    document.getElementById("loader");

    if(loader){

      loader.classList.add("loader-hidden");

    }

  },1500);

};



const cards =
document.querySelectorAll('.card');

cards.forEach(card => {

  card.addEventListener('mouseenter', () => {

    card.style.boxShadow =
    '0 0 25px rgba(56,189,248,0.35)';

  });

  card.addEventListener('mouseleave', () => {

    card.style.boxShadow = 'none';

  });

});



function darkModeToggle(){

  document.body.classList.toggle(
  'light-mode'
  );

}



console.log(
"CE Toolkit Loaded Successfully"
);

/* =========================
   LOGIN SYSTEM
========================= */

function loginUser(){

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  if(email === "" || password === ""){

    alert("Please fill all fields");

    return;

  }

  localStorage.setItem(
    "ce_user",
    email
  );

  alert("Login Successful 😎");

  window.location.href =
  "index.html";

}



/* =========================
   CHECK USER
========================= */

window.addEventListener("load", () => {

  const savedUser =
  localStorage.getItem("ce_user");

  const userNameArea =
  document.getElementById("user-name");

  if(savedUser && userNameArea){

    userNameArea.innerText =
    savedUser;

  }

});

function loginUser(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

if(email === "" || password === ""){

alert("Fill all fields");

return;

}

localStorage.setItem(
"ce_user",
email
);

window.location.href =
"../index.html";

}