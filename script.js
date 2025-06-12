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
  
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const amountInput = document.getElementById("amount");
  const modal = document.getElementById("resultModal");
  const overlay = document.getElementById("overlay");
  const modalText = document.getElementById("modalText");
  const historyList = document.getElementById("historyList");
  
  Object.keys(exchangeRates).forEach(currency => {
    let option1 = new Option(currency, currency);
    let option2 = new Option(currency, currency);
    fromCurrency.add(option1.cloneNode(true));
    toCurrency.add(option2.cloneNode(true));
  });
  
  fromCurrency.value = "PKR";
  toCurrency.value = "USD";
  
  function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(amountInput.value);
  
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }
  
    const inPKR = amount * exchangeRates[from];
    const result = inPKR / exchangeRates[to];
    const resultText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
  
    modalText.textContent = resultText;
    modal.style.display = "block";
    overlay.style.display = "block";
  
    addToHistory(resultText);
  }
  
  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
    amountInput.value = "";
  }
  
  function addToHistory(entry) {
    const li = document.createElement("li");
    li.innerHTML = `${entry} <button class="delete-btn">🗑</button>`;
  
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });
  
    historyList.prepend(li);
}
  
