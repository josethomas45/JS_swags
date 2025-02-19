let time = prompt("Please enter the time in 24-hour format:");
time = parseInt(time, 10);
let greeting = time > 12 ? 'Good afternoon' : 'Good morning';
console.log(greeting);

document.getElementById('greetingMessage').innerText = greeting;