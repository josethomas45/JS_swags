// learning slicing

const email = "edwin@test.com";

let username = email.slice(0, email.indexOf("@"));

console.log(username);

let domain = email.slice(email.indexOf("@") + 1);

console.log(domain);

let result = username + "@" + domain;

console.log(result);

