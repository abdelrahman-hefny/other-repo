let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let saleh = document.querySelector("nav ul");
let printt = document.querySelector(".printt");
btn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
btn2.addEventListener("click", function () {
  window.scrollTo({ top: 1000000, behavior: "smooth" });
});

printt.addEventListener("click", function () {
  print();
});

btn.innerHTML = '<div style="color: white;">Up</div>';
btn2.innerHTML = '<div style="color: white;">down</div>';
saleh.innerHTML += '<li><a href="صالح.html">صالح</a></li>';

let aa = document.getElementById("uer");
let e = document.getElementById("djd");
let d = document.getElementById("dd");

e.addEventListener("click", function () {
  aa.style.display = "none";
});
d.addEventListener("click", function () {
  aa.style.display = "block";
});
