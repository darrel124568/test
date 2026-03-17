 function convertTemperature(unit) {
            const celsiusInput = document.getElementById('celsius');
            const fahrenheitInput = document.getElementById('fahrenheit');
            const kelvinInput = document.getElementById('kelvin');
            const resultsDiv = document.getElementById('results');

            let celsius, fahrenheit, kelvin;

            if (unit === 'celsius') {
                celsius = parseFloat(celsiusInput.value);
                if (isNaN(celsius)) return;
                fahrenheit = (celsius * 9/5) + 32;
                kelvin = celsius + 273.15;
            } else if (unit === 'fahrenheit') {
                fahrenheit = parseFloat(fahrenheitInput.value);
                if (isNaN(fahrenheit)) return;
                celsius = (fahrenheit - 32) * 5/9;
                kelvin = celsius + 273.15;
            } else if (unit === 'kelvin') {
                kelvin = parseFloat(kelvinInput.value);
                if (isNaN(kelvin)) return;
                celsius = kelvin - 273.15;
                fahrenheit = (celsius * 9/5) + 32;
            }

            celsiusInput.value = celsius.toFixed(2);
            fahrenheitInput.value = fahrenheit.toFixed(2);
            kelvinInput.value = kelvin.toFixed(2);

            resultsDiv.innerHTML = `
                <div class="result-item">
                    <span class="result-label">Celsius:</span>
                    <span class="result-value">${celsius.toFixed(2)} °C</span>
                </div>
                <div class="result-item">
                    <span class="result-label">Fahrenheit:</span>
                    <span class="result-value">${fahrenheit.toFixed(2)} °F</span>
                </div>
                <div class="result-item">
                    <span class="result-label">Kelvin:</span>
                    <span class="result-value">${kelvin.toFixed(2)} K</span>
                </div>
            `;
        }