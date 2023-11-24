console.log("Hello, World!");


var main1 = document.getElementById("main");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn");
var heroSection1 = document.getElementById("heroSection");

btn.addEventListener("click", function() {
    main1.classList.replace("main1", "main2");
    btn1.classList.replace("btn1", "btn2");
    heroSection1.classList.replace("heroSection1", "heroSection2");
    alert("Theme Replaced Successfully!");

    btn.innerHTML = "Welcome!";
});