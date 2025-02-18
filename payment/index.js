const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const paypalBtn = document.getElementById('paypalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');


mySubmit.onclick = function() {
if(myCheckbox.checked){
    subResult.textContent = 'You are subsribed';
}
else{
    subResult.textContent = 'You are NOT subsribed';
}

if(visaBtn.checked){
    paymentResult.textContent = 'You have selected Visa';
}
else if(mastercardBtn.checked){
    paymentResult.textContent = 'You have selected Mastercard';
}
else if(paypalBtn.checked){
    paymentResult.textContent = 'You have selected Paypal';
}
else{
    paymentResult.textContent = 'You must select a payment method';
}

}