# Currency Converter

A sleek, simple, and user-friendly Currency Converter web application that allows users to convert currencies with real-time exchange rates. It is designed for ease of use to convert one currency into another. It dynamically fetches exchange rates from a reliable API, ensuring users always get the most up-to-date conversion rates.

![Preview](/assets/preview.png)

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Usage](#usage)
- [Reporting Issues](#reporting-issues)

## Features

- Features a visually appealing dark-themed interface.
- Optimized for performance and responsiveness.
- Fetches the latest rates from [ExchangeRate-API](https://www.exchangerate-api.com/).
- Automatically populates currency options based on available data.
- Includes features such as ARIA labels for enhanced accessibility.
- Gracefully handles API failures or invalid user inputs.

## Project Structure

```plaintext
Currency-Converter/        # Root directory 
├── assets/               # Directory for static assets
│   ├── favicon.png       # Favicon for the website
│   └── preview.png       # Preview image for social sharing.
│
├── src/                  # Source code directory
│   ├── style.css         # Main CSS file for styling
│   └── script.js         # JavaScript for functionality
│
├── index.html            # Main HTML file
├── README.md             # Project documentation
└── LICENSE               # License file 
```

## Technologies Used

### Frontend:

- HTML5
- CSS3
- JavaScript (ES6+)

### API:

- [ExchangeRate-API](https://www.exchangerate-api.com/)

## API Integration
This application uses the ExchangeRate API to fetch real-time exchange rates. 

### Key Functions:

fetchRates(): Fetches exchange rates for the selected base currency.
populateCurrencyOptions(): Dynamically populates dropdown menus with available currencies.
convertCurrency(): Calculates and displays the converted amount.

## Usage

1. Simply open <a href="https://atia-farha.github.io/currency-converter/" target="_blank">this link</a>.
2. Use the first dropdown to select the currency you want to convert from.
3. Input the amount in the base currency.
4. Choose the currency you want to convert to using the second dropdown.
5. Click the "Convert" button or press "Enter" to view the converted amount.

*Ensure that you already have an installed web browser (Chrome, Firefox, etc.) on your device. 

## Reporting Issues

If you encounter any bugs or have suggestions for improvement, please report them in the <a href="https://github.com/Atia-Farha/currency-converter/issues" target="_blank">Issues</a> section of this GitHub repository. I will address them promptly.

<p align="center">© Designed and developed by [Atia Farha](https://github.com/Atia-Farha) | ALL RIGHTS RESERVED</p>
