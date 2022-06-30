import Link from 'next/link';
import home from '../../public/images/homeIcon.png'
import React from 'react';
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'
import { Container, Div1, Div2, Div3 } from './HeaderStyles';
import hamburger from '../../public/images/hamburger.png'
import cross from '../../public/images/cross.png'

// var cityInput = document.querySelector(".city-input");
// var searchButton = document.querySelector(".search-button");
// var clearHistory = document.querySelector(".clear-history");

var Home = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image className='vitoIcon'  src={home} alt='homeIcon' width={48} height={48} />
    </a>
  )
})

var APIKey = "f7412588db28fd477a32d11dcd322400";
//  When the search button is clicked, look for the city name the from the user input
function getWeather(cityName) {
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;
    //  Execute fetch request from open weather map api
    fetch(queryURL)
        .then(function (response) {
            return response.json()

        })
        .then(function (data) {
             console.log(data)
            displayCurrentWeather(data)
            fiveDayForecast(data);
        })
};

function displayCurrentWeather(data) {
  pic.text(data.weather[0].main);
  tempElR.text("High: " + k2f(data.main.temp_max) + "° F" + " & Low: " + k2f(data.main.temp_min) + "° F");
  cityName.text("City Name: " + data.name);
  tempEl.text("Current Temp: " + k2f(data.main.temp) + "° F & Feels like: " + k2f(data.main.feels_like) + "° F");
  humidityEl.text("Humidity: " + data.main.humidity + "%");
  windEl.text("Wind Speed: " + data.wind.speed + " mph");
}

// searchButton.addEventListener("click", function () {
//   var searchTerm = cityInput.value;
//   getWeather(searchTerm)
//   // put function for passing data from cityInput and save to local storage
//   getWeather(searchTerm);
//   searchHistory.push(searchTerm);
//   localStorage.setItem("search",JSON.stringify(searchHistory));
//   renderSearchHistory();
// })

function k2f(K) {
  return Math.floor((K - 273.15) *1.8 +32);
}

function Header() {
  return (
    <Container>
      <Div1>
        <Menu
          customBurgerIcon={<Image src={hamburger} alt='hamburger' width={50} height={50} />}
          customCrossIcon={<Image src={cross} alt='cross' width={50} height={50} />}
          right>
          <Link className="menu-item" href='/' passHref><a className='NavLink'>Home</a></Link>
          <Link className="menu-item" href='/project' passHref><a className='NavLink'>Projects</a></Link>
          <Link className="menu-item" href='/blog' passHref><a className='NavLink'>Blogs</a></Link>
          <Link className="menu-item" href='/videos' passHref><a className='NavLink'>Videos</a></Link>
          <Link className="menu-item" href='/vito' passHref><a className='NavLink'>The Dogfather</a></Link>
          <Link className="menu-item" href='/contact' passHref><a className='NavLink'>Contact</a></Link>
        </Menu>
      </Div1>
      <Div2>

      </Div2>
      <Div3>
        <Link href='/' passHref>
          <Home />
        </Link>
      </Div3>
    </Container>
  );
}

export default Header;
