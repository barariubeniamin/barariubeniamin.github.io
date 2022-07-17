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
function showHomePage() {
  document.getElementById("home").style.display = "block";
}

function showSkillsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
}

function showProjectsPage() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
}

function showLanguagesPage() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "block";
}

showHomePage();
