// 1. Accessing and logging the document title
console.log("Document Title: " + document.title);

// 2. Changing the document title
document.title = "Updated Title";

// 3. Accessing the body element
let body = document.body;
console.log("Body Element: ", body);

// 4. Accessing the header element by ID
let header = document.getElementById("header");
console.log("Header: ", header);

// 5. Changing the text content of the header
header.textContent = "Hello, JavaScript!";

// 6. Accessing all paragraphs by class name
let paragraphs = document.getElementsByClassName("text");
console.log("Paragraphs: ", paragraphs);

// 7. Changing the text content of the first paragraph
paragraphs[0].textContent = "This is the updated first paragraph.";

// 8. Creating a new element and appending it to the body
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new dynamically created paragraph.";
document.body.appendChild(newParagraph);

// 9. Removing the second paragraph
document.body.removeChild(paragraphs[1]);

// 10. Accessing and manipulating the link element by ID
let link = document.getElementById("link1");
console.log("Link: ", link);

// 11. Creating a new attribute for the header element
let newAttr = document.createAttribute("data-info");
newAttr.value = "extra-info";
header.setAttributeNode(newAttr);
console.log("New Attribute Added to Header: " + header.getAttribute("data-info"));

// 12. Accessing elements by tag name (all paragraphs)
let allParagraphs = document.getElementsByTagName("p");
console.log("All Paragraphs: ", allParagraphs);

// 13. Accessing elements using querySelector (selecting the first paragraph with class 'text')
let firstTextParagraph = document.querySelector(".text");
console.log("First Paragraph with .text class: ", firstTextParagraph);

// 14. Accessing all elements using querySelectorAll (all paragraphs with class 'text')
let allTextParagraphs = document.querySelectorAll(".text");
console.log("All Paragraphs with .text class: ", allTextParagraphs);

// 15. Accessing all links in the document
let links = document.links;
console.log("All Links: ", links);

// 16. Accessing the root HTML element
let root = document.documentElement;
console.log("Root Element (HTML): ", root);

// 17. Accessing the current focused element
let activeElement = document.activeElement;
console.log("Currently Focused Element: ", activeElement);

// 18. Accessing cookies (if any)
console.log("Cookies: ", document.cookie);

// 19. Accessing the URL of the document
console.log("Document URL: " + document.URL);

// 20. Adding an event listener to the document
document.addEventListener("click", function() {
  console.log("Document clicked!");
});

// 21. Removing an event listener
document.removeEventListener("click", function() {
  console.log("Document clicked!");
});

// 22. Accessing and changing the body content (HTML)
console.log("Body HTML before change: " + document.body.innerHTML);
document.body.innerHTML = "<h2>This is new content inside the body.</h2>";

// 23. Accessing and changing the body text content (without HTML tags)
console.log("Body Text before change: " + document.body.innerText);
document.body.innerText = "This is just the text content, without any HTML.";
