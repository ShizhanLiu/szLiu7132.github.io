var typed = new Typed(".typing", {
  strings: [
    "Full-Stack Software Developer",
    "Northeastern University CS ",
    "Open-source Contributer",
  ],
  typeSpeed: 100,
  BackSpeed: 40,
  loop: true,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var curIndex = 0;
var sizeIndex = 0;
var changeFontButton = document.getElementById("changeFontStyle");
var changeFontSize = document.getElementById("changeFontSize");
var body = document.body;
changeFontButton.addEventListener("click", function () {
  console.log("hi");
  var fontClasses = ["serif", "fantasy", "monospace", "cursive"]; 
  
  body.style.fontFamily = fontClasses[curIndex]; 
  curIndex++;
  if (curIndex == 4) curIndex = 0;
});

changeFontSize.addEventListener("click", function () {
  console.log("hi");
  var fontClasses1 = [
    "70%",
    "85%",
    "58%",
    "63.5%",
    "70%",
    "85%",
    "58%",
    "63.5%",
    "70%",
    "85%",
    "58%",
    "63.5%",
    "70%",
    "85%",
    "58%",
    "63.5%",
    "70%",
    "85%",
    "58%",
    "63.5%",
  ];
  body.style.fontSize = fontClasses1[sizeIndex];
  sizeIndex++;
  if (sizeIndex == 20) {
    console.log("it's me");
    sizeIndex == 0;
  }
});
