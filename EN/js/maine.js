let srch = document.querySelector(".srch");
let migov = document.querySelector(".migov");
let search = document.querySelector(".search");
let icone = document.getElementById("icone");
let foc_icone = document.getElementById("foc_icone");
let nn = document.getElementById("nn");
let sear = document.getElementById("sear");
nn.onclick = function () {
  sear.classList.toggle('my_togale')
};
migov.onclick = function () {
    srch.style.width = "100px";
    search.style.backgroundColor = "rgba(191, 186, 186, 0.322)";
    srch.focus();
};
icone.onclick = function () {
  foc_icone.focus();
};

// functione checkbox \\
// Get All Box Check
let check_1 = document.getElementById("check_1");
let check_2 = document.getElementById("check_2");
let check_3 = document.getElementById("check_3");
let check_4 = document.getElementById("check_4");
// Get All img in Check Box
let check_1_img_1 = document.getElementById("check_1_img_1");
let check_2_img_2 = document.getElementById("check_2_img_2");
let check_3_img_3 = document.getElementById("check_3_img_3");
let check_4_img_4 = document.getElementById("check_4_img_4");
// All Functiones Hover Box Check 
check_1.onclick = function() {
  check_1_img_1.classList.toggle("check_img_true")
  check_1.classList.toggle("bg")
}
check_2.onclick = function() {
  check_2_img_2.classList.toggle("check_img_true")
  check_2.classList.toggle("bg")
}
check_3.onclick = function() {
  check_3_img_3.classList.toggle("check_img_true")
  check_3.classList.toggle("bg")
}
check_4.onclick = function() {
  check_4_img_4.classList.toggle("check_img_true")
  check_4.classList.toggle("bg")
}