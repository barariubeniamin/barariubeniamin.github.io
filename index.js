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
  console.info("display skills");

  // initializare; conditie; post exec
  for (var i = 1; i < 11; i++) {
    console.info(`${i} * 5 = ${1 * 5}`);
    // i = i + 1;
  }
  var ul = document.querySelector("#skills ul");
  var skills = ["html", "css", "js"];
  console.info(ul);
  for (var i = 1; i < 3; i++) {
    ul.innerHTML += `<li>$(skills[i])<li>`;
  }
}

displaySkills();
