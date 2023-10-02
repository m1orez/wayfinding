const apiKey = 'de8373af35b1d5d1f5332a4896acfbec';
const city = 'Rotterdam';
const temperatureElement = document.getElementById('temperature');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const temperature = data.main.temp.toFixed(1);
        temperatureElement.textContent = `${temperature}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperatureElement.textContent = 'Error fetching weather data';
    }
}

fetchWeather();
