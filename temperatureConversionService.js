const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
const kelvinToCelsius = (kelvin) => kelvin - 273.15;
const celsiusToKelvin = (celsius) => celsius + 273.15;
const fahrenheitToKelvin = (fahrenheit) => (fahrenheit + 459.67) * 5 / 9;
const kelvinToFahrenheit = (kelvin) => (kelvin * 9 / 5) - 459.67;
const celsiusToCelsius = (celsius) => celsius;
const fahrenheitToFahrenheit = (fahrenheit) => fahrenheit;
const kelvinToKelvin = (kelvin) => kelvin;

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kelvinToCelsius,
  celsiusToKelvin,
  fahrenheitToKelvin,
  kelvinToFahrenheit,
  celsiusToCelsius,
  fahrenheitToFahrenheit,
  kelvinToKelvin
};
