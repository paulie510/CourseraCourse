
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; 
var myFunc = function (letter) { 
for (var i = 0; i < letter.length; i++) { 
if (letter[i].charAt(0) == 'j' || letter[i].charAt(0)=='J') { 
console.log("Goodbye " + names[i]); 
} 
if (letter[i].charAt(0) != 'j' && letter[i].charAt(0)!='J') {
console.log("Hello " + names[i]); }
 } 
 } 

myFunc(names);