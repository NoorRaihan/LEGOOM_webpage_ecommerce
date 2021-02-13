
document.getElementById("contact_btn").onclick = function(){

  document.getElementById("contact").style.display = "block";
  console.log("test")
}

document.getElementById("btn-close").onclick = function() {

  document.getElementById("contact").style.display = "none";
}

document.getElementById("icon-mb").addEventListener("click",mbmenu);

// function mbmenu() {
//   var men = document.getElementById("icon-mb");

//   if (men.style.display === "block") {
//     men.style.display == "none";
//     console.log("failed");
//   }
//   else {
//     men.style.display == "block";
//     console.log("success");
//   }
// }

function subsm() {
  document.getElementById("subscription").style.display = "block";
}

function contactmb() {
  document.getElementById("contact").style.display = "block";
}

function closesubs() {

  document.getElementById("subscription").style.display = "none";
  console.log("success");
}

function redir() {
  window.open("https://formspree.io/f/meqpryro","_blank","width=400, height=200");
}