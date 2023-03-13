const cityForm = document.querySelector('[data-js="change-location"]')
const citynameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')
let timeImg = document.querySelector('[data-js="time"]')

const showCityCard = () => {

    if( cityCard.classList.contains('d-none') ){
        cityCard.classList.remove('d-none')
    }
}

const showCItyWetherInfo = async cityName=> {

    const [ { Key , LocalizedName }] = await getCityData(cityName)
    const [ { WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

    timeImg.src = IsDayTime ? "./src/day.svg" : "./src/night.svg"   
    timeIconContainer.innerHTML = timeIcon
    citynameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value
}


if (localStorage.getItem('cityName')){
    showCityCard()
    showCItyWetherInfo(localStorage.getItem('cityName'))
}

cityForm.addEventListener('submit', event => {
    event.preventDefault()
    
    const inputValue = event.target.city.value
    
    
    showCityCard()
    showCItyWetherInfo(inputValue)

    
    localStorage.setItem('cityName', inputValue)
    cityForm.reset()

})

