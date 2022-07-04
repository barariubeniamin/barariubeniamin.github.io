console.info(2);
console.debug(33 + 2);
console.warn(15 * 3 - 10)
console.error("started");

var myName = "Beniamin";
var age = 29;
console.info("My name is " +  myName + ", I'm " + age + "years old");
age = 30
console.info("My name is " +  myName + ", I'm " + age + "years old");
age = 36
console.info("My name is " +  myName + ", I'm " + age + "years old");

var jobtitle = " <span>Student</span> developer@gmail.com ";
var mottoElement = document.getElementById("motto")

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

// mottoElement.innerHTML = mottoElement.innerHTML + "&" jobtitle
mottoElement.innerHTML = jobtitle
