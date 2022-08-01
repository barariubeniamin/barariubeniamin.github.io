console.info(2);
console.debug(33 + 2);
console.warn(23 * 3 - 10);
console.error("started");

var myName = "Beniamin";
var age = 29;
console.info("My name is " + myName + ", I'm " + age + "years old");
age = 30;
console.info("My name is " + myName + ", I'm " + age + "years old");
age = 36;
console.info("My name is " + myName + ", I'm " + age + "years old");

var jobtitle = " <span>Student</span> developer@gmail.com ";
var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

// mottoElement.innerHTML = mottoElement.innerHTML + "&" jobtitle
mottoElement.innerHTML = jobtitle;

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

var activePage = "skills";

function showPage(nextPage) {
  hide(activePage);
  show(nextPage);
  // console.warn("change", activePage, "to", nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        console.warn("click pe menu", id);
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();

function displaySkills() {
  var ul = document.querySelector("#skills ul");
  var skills = [
    { name: "js", endorcements: 8, favorite: true },
    { name: "css", endorcements: 9, favorite: false },
    { name: "html", endorcements: 4, favorite: true },
  ];
  skills.sort(function (a, b) {
    return b.endorcements - a.endorcements;
    // if (a.name.toLowerCase() < b.name.toLowerCase()) {
    //   return -1;
    // }
    // if (a.name.toLowerCase() > b.name.toLowerCase()) {
    //   return 1;
    // }
    // return 0;
  });
  console.info(skills);
  for (var i = 0; i < skills.length; i++) {
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorcements}</li>`;
  }
}

function loadSkills() {
  fetch("skills.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (serverSkills) {
      displaySkills(serverSkills);
    });
}

loadSkills();
