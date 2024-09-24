document.getElementById("convertButton").addEventListener("click", convertTemperature);

function convertTemperature() {
  const temperatureInput = document.getElementById("temperatureInput").value;
  const selectedUnit = document.getElementById("unitSelect").value;
  const errorElement = document.getElementById("error");
  const resultElement = document.getElementById("result");
  
  // Input validation
  const temperature = parseFloat(temperatureInput);
  if (isNaN(temperature)) {
    errorElement.textContent = "Please enter a valid number!";
    resultElement.textContent = "-";
    return;
  } else {
    errorElement.textContent = "";
  }

  let convertedTemp;
  let convertedUnit;

  if (selectedUnit === "celsius") {
    // Convert from Celsius to Fahrenheit and Kelvin
    const toFahrenheit = (temperature * 9/5) + 32;
    const toKelvin = temperature + 273.15;
    convertedTemp = `F: ${toFahrenheit.toFixed(2)}°F, K: ${toKelvin.toFixed(2)}K`;
  } else if (selectedUnit === "fahrenheit") {
    // Convert from Fahrenheit to Celsius and Kelvin
    const toCelsius = (temperature - 32) * 5/9;
    const toKelvin = toCelsius + 273.15;
    convertedTemp = `C: ${toCelsius.toFixed(2)}°C, K: ${toKelvin.toFixed(2)}K`;
  } else if (selectedUnit === "kelvin") {
    // Convert from Kelvin to Celsius and Fahrenheit
    const toCelsius = temperature - 273.15;
    const toFahrenheit = (toCelsius * 9/5) + 32;
    convertedTemp = `C: ${toCelsius.toFixed(2)}°C, F: ${toFahrenheit.toFixed(2)}°F`;
  }

  resultElement.textContent = convertedTemp;
}