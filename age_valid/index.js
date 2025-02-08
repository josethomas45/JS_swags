const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement= document.getElementById("resultElement");

let age;


mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    if(age>=18){
        resultElement.innerHTML = 'You are old enough to enter the site.';
    }
    else if(age <= 0){
        resultElement.innerHTML = 'Invalid age';
    }
    else{
        resultElement.innerHTML = 'You are not old enough to enter the site.';
    }
}

