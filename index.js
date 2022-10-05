const search = document.getElementById('search-box');
const form = document.querySelector('form');
const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';
const weather = document.getElementById('weather');
const body = document.querySelector('body');

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    showWeather(data);

}
const showWeather = (data) => {
    if(data.cod == '404'){
        weather.innerHTML = `<h3>Oops! City not found!</h3>`
        return;
        
    }
   
    weather.innerHTML = `
    <div>
    <img
     src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
     alt="weather"
    />
    </div>
    <div>
    <h2>${data.main.temp} ℃</h2>
    <h4>${data.weather[0].main}</h4>
</div>
`;
};

body.onload = () => {
    weather.innerHTML = `
    <div>
    <img
     src="https://openweathermap.org/img/wn/02n@2x.png"
     alt="weather"
    />
    </div>
    <div>
    <h2>32 ℃</h2>
    <h4>clear</h4>
</div>
`;
}

form.addEventListener('submit', function(event){
    getWeather(search.value);
    console.log(search.value);
    event.preventDefault();
})