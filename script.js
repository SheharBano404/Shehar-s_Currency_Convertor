const exchangeRates = {
    "PKR": 1.0,
    "USD": 279.90,
    "EUR": 303.15,
    "GBP": 393.50,
    "INR": 3.21,
    "AUD": 176.55,
    "CAD": 162.30,
    "JPY": 1.89,
    "CNY": 38.68
};

const currencySelects = document.querySelectorAll("select");
Object.keys(exchangeRates).forEach(currency => {
    currencySelects.forEach(select => {
        let option = document.createElement("option");
        option.value = currency;
        option.textContent = currency;
        select.appendChild(option);
    });
});

function convertCurrency() {
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    let inPKR = amount * exchangeRates[fromCurrency];
    let convertedAmount = inPKR / exchangeRates[toCurrency];

    document.getElementById("modal-text").textContent = 
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    
    document.getElementById("modal-overlay").classList.add("show");
    document.getElementById("result-modal").classList.add("show");
    document.body.classList.add("modal-active");  
}

function closeModal() {
    document.getElementById("modal-overlay").classList.remove("show");
    document.getElementById("result-modal").classList.remove("show");
    document.body.classList.remove("modal-active");
}
