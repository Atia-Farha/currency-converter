// Initialize exchange rate data and default currencies
let exchangeRates = {}; // Object to store exchange rates fetched from the API
let baseCurrency = 'USD'; // Default base currency for conversion
let targetCurrency = 'EUR'; // Default target currency for conversion

// Get references to HTML elements used in the app
const amountInput = document.getElementById('amount'); // Input field for the amount to convert
const baseCurrencySelect = document.getElementById('baseCurrency'); // Dropdown to select the base currency
const targetCurrencySelect = document.getElementById('targetCurrency'); // Dropdown to select the target currency
const resultInput = document.getElementById('result'); // Input field to display the conversion result
const convertBtn = document.getElementById('convertBtn'); // Button to trigger currency conversion

// Add an event listener to detect when the "Enter" key is pressed
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') { // Check if the pressed key is "Enter"
    event.preventDefault(); // Stop the default behavior (e.g., form submission)
    convertCurrency(); // Perform the currency conversion
  }
});

// Function to fetch the latest exchange rates from an API
async function fetchRates() {
  try {
    // Fetch data for the selected base currency
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
    const data = await res.json(); // Parse the response into a JSON object
    
    if (data && data.rates) { // Check if the response contains exchange rates
      exchangeRates = data.rates; // Save the exchange rates
      populateCurrencyOptions(); // Update the dropdown options with available currencies
    } else {
      // Show an error message if the rates couldn't be loaded
      resultInput.value = "Failed to load exchange rates.";
    }
  } catch (error) {
    // Handle errors (e.g., network issues or API problems)
    resultInput.value = 'Error fetching rates: ' + error.message;
  }
}

// Function to populate the currency dropdown menus with available options
function populateCurrencyOptions() {
  // Clear any existing options in the dropdowns
  baseCurrencySelect.innerHTML = '';
  targetCurrencySelect.innerHTML = '';

  // Add an option for each available currency
  Object.keys(exchangeRates).forEach(currency => {
    // Create and add an option for the base currency dropdown
    const baseOption = document.createElement('option');
    baseOption.value = currency;
    baseOption.textContent = currency;
    baseCurrencySelect.appendChild(baseOption);

    // Create and add an option for the target currency dropdown
    const targetOption = document.createElement('option');
    targetOption.value = currency;
    targetOption.textContent = currency;
    targetCurrencySelect.appendChild(targetOption);
  });

  // Set default selections for the dropdowns
  baseCurrencySelect.value = baseCurrency;
  targetCurrencySelect.value = targetCurrency;
}

// Function to perform the currency conversion
function convertCurrency() {
  const amount = parseFloat(amountInput.value); // Get and convert the input amount to a number

  // Check if the input amount is valid
  if (isNaN(amount) || amount <= 0) {
    resultInput.value = 'Please enter a valid amount.'; // Show a message if the input is invalid
    return;
  }

  // Get the exchange rate for the selected target currency
  const rate = exchangeRates[targetCurrency];

  if (rate) {
    // Calculate and display the converted amount
    const convertedAmount = (amount * rate).toFixed(2); // Round to 2 decimal places
    resultInput.value = convertedAmount;
  } else {
    // Show an error message if the conversion couldn't be performed
    resultInput.value = 'Error: Invalid conversion';
  }
}

// Add an event listener to the "Convert" button to trigger the conversion
convertBtn.addEventListener('click', convertCurrency);

// Clear the result when the user starts typing a new amount
amountInput.addEventListener('input', function () {
  resultInput.value = ''; // Clear the result field
});

// Add an event listener to update the base currency when changed
baseCurrencySelect.addEventListener('change', function () {
  baseCurrency = this.value; // Update the base currency
  resultInput.value = ''; // Clear the result field
  fetchRates(); // Fetch new exchange rates for the selected base currency
});

// Add an event listener to update the target currency when changed
targetCurrencySelect.addEventListener('change', function () {
  targetCurrency = this.value; // Update the target currency
  resultInput.value = ''; // Clear the result field
});

// Fetch initial exchange rates when the app is loaded
fetchRates();