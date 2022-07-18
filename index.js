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

// Show home page

function hidePage(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hidePage("home");
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
}

function showHomePage() {
  hideAllPages();
  showPage("home");
}

function showSkillsPage() {
  hideAllPages();
  showPage("skills");
}

function showProjectsPage() {
  hideAllPages();
  showPage("projects");
}

function showLanguagesPage() {
  hideAllPages();
  showPage("languages");
}

showHomePage();
