const open = document.getElementById("open");
const modalCon = document.getElementById("modalCon");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modalCon.classList.add("show");
});

close.addEventListener("click", () => {
  modalCon.classList.remove("show");
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let openMod = document.querySelector(".btnOpen");
let closeMod = document.querySelector(".btnClose");

function toggle(link) {
  let blur = document.querySelector("all");
  let modal = document.querySelector("modal");

  link.addEventListener("click", function () {
    blur.classList.toggle("active");
    modal.classList.toggle("active");
  });
}

toggle(openMod);
toggle(closeMod);

function imgAll() {
  $(".image-box").fadeIn();
}

function imgPred() {
  $(".image-box").hide();
  $("#pre").fadeIn();
  $("#pre1").fadeIn();
}

function imgFami() {
  $(".image-box").hide();
  $("#kel").fadeIn();
  $("#kel1").fadeIn();
}

function imgFood() {
  $(".image-box").hide();
  $("#food1").fadeIn();
  $("#food2").fadeIn();
}

function imgProdu() {
  $(".image-box").hide();
  $("#product").fadeIn();
  $("#product1").fadeIn();
}
