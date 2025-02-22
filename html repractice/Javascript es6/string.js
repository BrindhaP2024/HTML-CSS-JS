let str = "string";
// splittr
console.log(str.length);
console.log(str.toUpperCase(),str.toLowerCase(),str.toLocaleUpperCase(),str.toLocaleLowerCase());
console.log(str.slice(2,6));//start,end length
console.log(str.substring(3,-2)); //start,end (does not takes the negative values)
console.log(str.substr(3,2));//start,length alone

console.log("Brindha".indexOf("a"),"Brindha".lastIndexOf("i"),"brindha".includes("rin"),"nivethe".startsWith("N"),"raj".endsWith("x"));

let str1 = "string methods"
console.log(str1.replace("string","str"));
console.log(str1);

console.log(str1.replaceAll("methods","functions"));
let str_trim = "     string trims    here        "
console.log(str_trim.trim());
console.log(str_trim.trimStart(),str_trim.trimEnd());
console.log(str_trim);

console.log("2".padStart(4,"0"),"6".padEnd(5,"1"));

// splits string into an array
// joins array into a string
let csv = "Brin,dha,Palani";
console.log(csv.split(','))
let str_arr = [1,34,56,74];
console.log(str_arr.join());
// repeat 
let strrepeat = str.repeat(3)
console.log(strrepeat);
console.log("hello".charAt('4'));
console.log("hello".charCodeAt(3));
console.log("💖".codePointAt(0)); 

console.log((345).toString());

let strObj = new String("Brindha");
console.log(strObj.valueOf());





// let str1 = str.split;

// console.log(str1);
