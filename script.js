
function calculateInterest() {
   
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');

    const timeInput = document.getElementById('time');
    const resultDisplay = document.getElementById('result');

    
    const P = parseFloat(principalInput.value);
    const R = parseFloat(rateInput.value);

    const T = parseFloat(timeInput.value);

    
    if (isNaN(P) || isNaN(R) || isNaN(T) || P <= 0) {
        resultDisplay.innerText = "Please enter a valid input!!.";
        resultDisplay.style.color = "#ff7675"; 
    }


    const interest = (P * R * T) / 100;
    const total = P + interest;

    
    resultDisplay.style.color = "#7eebac"; 
    resultDisplay.innerHTML = `
        <div style="margin-top: 15px;">
            <p style="margin: 5px 0;">Interest: <strong>₹${interest.toLocaleString()}</strong></p>
            <p style="margin: 5px 0; font-size: 0.9em;">Total Amount: ₹${total.toLocaleString()}</p>
        </div>
    `;
}