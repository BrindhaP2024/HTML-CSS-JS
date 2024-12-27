let text = "Learn Javascript, the scripting Language";
let output = "";

output += "Original text: " + text + "<br>";

output += "charAt(0): " + text.charAt(0) + "<br>";
output += "concat(' How are you?'): " + text.concat(" How are you?") + "<br>";
output += "includes('World'): " + text.includes("World") + "<br>";
output += "indexOf('o'): " + text.indexOf("o") + "<br>";
output += "lastIndexOf('o'): " + text.lastIndexOf("o") + "<br>";
output += "match(/o/g): " + text.match(/o/g) + "<br>";
output += "replace('World', 'Everyone'): " + text.replace("World", "Everyone") + "<br>";
output += "slice(0, 5): " + text.slice(0, 5) + "<br>";
output += "split(', '): " + text.split(", ") + "<br>";
output += "substring(0, 5): " + text.substring(0, 5) + "<br>";
output += "toLowerCase(): " + text.toLowerCase() + "<br>";
output += "toUpperCase(): " + text.toUpperCase() + "<br>";
output += "trim(): " + text.trim() + "<br>";

document.getElementById("output").innerHTML = output