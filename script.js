document.getElementById('convertBtn').addEventListener('click', () => {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const scale = document.getElementById('scale').value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    switch (scale) {
        case 'Celsius':
            result = convertCelsius(temperature);
            break;
        case 'Fahrenheit':
            result = convertFahrenheit(temperature);
            break;
        case 'Kelvin':
            result = convertKelvin(temperature);
            break;
        default:
            result = 'Invalid scale selected.';
    }

    document.getElementById('result').innerHTML = result;
});

function convertCelsius(temp) {
    const fahrenheit = (temp * 9/5) + 32;
    const kelvin = temp + 273.15;
    return `
        <p>Celsius: ${temp.toFixed(2)} °C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>
    `;
}

function convertFahrenheit(temp) {
    const celsius = (temp - 32) * 5/9;
    const kelvin = (temp - 32) * 5/9 + 273.15;
    return `
        <p>Fahrenheit: ${temp.toFixed(2)} °F</p>
        <p>Celsius: ${celsius.toFixed(2)} °C</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>
    `;
}

function convertKelvin(temp) {
    const celsius = temp - 273.15;
    const fahrenheit = (temp - 273.15) * 9/5 + 32;
    return `
        <p>Kelvin: ${temp.toFixed(2)} K</p>
        <p>Celsius: ${celsius.toFixed(2)} °C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
    `;
}
