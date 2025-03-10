//learning method chaining

//----------no method chaining

username = window.prompt("Enter your name: ");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachara = username.slice(1);
extrachara = extrachara.toLowerCase();
username = letter + extrachara;

console.log(username);

//----------method chaining

username = window.prompt("Enter your name: ");
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);