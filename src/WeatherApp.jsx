import {  useState } from 'react';
import '../src/styles.css';

export default function WeatherApp() {

    const [city, setCity] = useState('');
    const [data, setData] = useState({});

    const search = async ()=>{
        await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city+"&units=metric&appid=d9f863441ad831894a84810bf74568e2")
        .then((response) => response.json())
        .then((data) => setData(data));
        console.log(data);
    };

    return (
        <div className="parent">
            <div className="card">
                <div className="search">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search"
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                    />
                    <button onClick={search}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1.5em"
                            width="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                        </svg>
                    </button>
                </div>
                <div className="weather loading">
                    <h2 className="city">Weather in {city}</h2>
                    <h1 className="temp">{data.main.temp}°C</h1>
                    <div className="flex">
                        <img
                            src="https://openweathermap.org/img/wn/50n.png"
                            alt=""
                            className="icon"
                        />
                        <div className="description">{data.weather[0].main}</div>
                    </div>
                    <div className="humidity">{data.main.humidity}%</div>
                    <div className="wind">Wind Speed:{data.wind.speed}km/h</div>
                </div>
            </div>
        </div>
    );
}
