// Document object module

const mainElement = document.getElementById("main");
mainElement.style.background = "red";

const section1Element = document.getElementById("section1");
section1Element.innerHTML =
  " <h1>This is a New Heading added by js script</h1>";
console.log(mainElement);
// section1Element.innerText = "some text";
// section1Element.textContent = "This is an example of a text content";
const pTag = document.getElementById("input");

const value = pTag.value;

console.log(value);
