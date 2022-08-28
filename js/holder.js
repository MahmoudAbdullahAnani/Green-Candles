// Start Functions Holder
let menu = document.getElementById("menu");
let pop = document.getElementById("pop_j");
let body = document.getElementsByTagName("body");
let holder = document.getElementById("holder");
menu.onclick = function () {
  pop.classList.toggle("inline");
  pop.classList.remove("none");
  if (pop.classList.contains("inline")) {
    holder.style.display = "block";
  } else {
    holder.style.display = "none";
  }
};
// remove holder
holder.onclick = function () {
  pop.classList.remove("inline");
  pop.classList.add("none");
  if (pop.classList.contains("inline")) {
    holder.style.display = "block";
  } else {
    holder.style.display = "none";
  }
};
// 
let menue = document.getElementById("menue");
let pop_je = document.getElementById("pop_je");
let holdere = document.getElementById("holdere");
menue.onclick = function () {
  pop_je.classList.toggle("inline");
  pop_je.classList.remove("none");
  if (pop_je.classList.contains("inline")) {
    holdere.style.display = "block";
  } else {
    holdere.style.display = "none";
  }
};
// remove holdere
holdere.onclick = function () {
  pop_je.classList.remove("inline");
  pop_je.classList.add("none");
  if (pop_je.classList.contains("inline")) {
    holdere.style.display = "block";
  } else {
    holdere.style.display = "none";
  }
};