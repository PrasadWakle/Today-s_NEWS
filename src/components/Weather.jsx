import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Weather() {
  const [newsData, setNewsData] = useState({
    temperature: "",
    description: "",
    img: "",
    icon: ""
  });

  const [isError, setIsError] = useState("");

  const query = "Mumbai";
  const apiKey = "573ae34a7fa7ca03c72547001aada50f";
  const unit = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;

  useEffect(() => {
    const weatherData = async () => {
      try {
        const res = await axios.get(url);
        const weatherToday = res.data;
        const temp = weatherToday.main.temp;
        const description = weatherToday.weather[0].description;
        const icon = weatherToday.weather[0].icon;
        const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  
        setNewsData({
          temperature: temp,
          description: description,
          img: imageURL,
          icon: icon
        });
      } catch (err) {
        setIsError(err.message);
      }
    };
    weatherData();
  }, [url]);

  const image = "Assets/" + newsData.icon + ".jpg";

  return (
    <Container>
      <div className="bg-image">
        <img className="background-img" src={image} alt="" />
      </div>
      <div className="weather-container">
        <span className="description">{newsData.description.toUpperCase()}</span>
        <img className="icon" src={newsData.img} alt="..." />
        <h1>
          {query} {newsData.temperature}°C
        </h1>
      </div>
      {isError !== "" && <h2>{isError}</h2>}
    </Container>
  );
}

export default Weather;

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  position: relative;
  .background-img {
    width: 100%;
    height: 400px;
  }
  .weather-container {
    text-align: left;
    width: 100%;
    height: auto;
    padding-left: 10px;
    padding-top: 90px;
    position: absolute;
    top: 240px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.4);
    .description {
      font-size: 1rem;
      font-weight: 600;
      padding-right: 20px;
    }
    h1 {
      width: 100%;
      margin: 5px 0;
      font-size: 2rem;
    }
    .icon {
      width: 30%;
      height: auto;
      position: absolute;
      top:0px ;
      left: -10px;
    }
  }
`;
