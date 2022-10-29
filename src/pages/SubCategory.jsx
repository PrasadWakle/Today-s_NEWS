import React from "react";
import BootstrapCards from "../components/BootstrapCards";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CarouselItem from "../components/CarouselItem";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SubCategory() {
  const [newsData, setNewsData] = useState([]);
  const params  = useParams();

  const {subCategory} = params;
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&category="+subCategory+"&apiKey=4d15ab0c37164629a49726604ab9f6c6";

  useEffect(() => {
    const news = async () => {
      try {
        const res = await axios.get(url);
        setNewsData(res.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    news();
  }, [url]);

  return (
    <Container>
      <Header />
      <Navbar />
      <div className="news-container">
        <div className="top-section">
          <div className="carousel-items">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {newsData.slice(0, 3).map(() => {
                  return (
                    <>
                      <CarouselItem
                        key={newsData[0].source.id}
                        id={newsData[0].source.id}
                        title={newsData[0].title}
                        description={newsData[0].description}
                        url={newsData[0].url}
                        imgToUrl={newsData[0].urlToImage}
                        author={newsData[0].author}
                        date={newsData[0].date}
                      />
                      <CarouselItem
                        key={newsData[1].source.id}
                        id={newsData[1].source.id}
                        title={newsData[1].title}
                        description={newsData[1].description}
                        url={newsData[1].url}
                        imgToUrl={newsData[1].urlToImage}
                        author={newsData[1].author}
                        date={newsData[1].date}
                      />
                      <CarouselItem
                        key={newsData[2].source.id}
                        id={newsData[2].source.id}
                        title={newsData[2].title}
                        description={newsData[2].description}
                        url={newsData[2].url}
                        imgToUrl={newsData[2].urlToImage}
                        author={newsData[2].author}
                        date={newsData[2].date}
                      />
                    </>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="cards-section">
          {newsData.slice(3, 15).map((article) => {
            return (
              <BootstrapCards
                key={article.title}
                id={article.title}
                title={article.title}
                description={article.description}
                url={article.url}
                imgToUrl={article.urlToImage}
                author={article.author}
                date={article.publishedAt}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  .news-container {
    margin: 50px auto 100px;
    width: 75%;
    height:100%;
    background-color: #ffffff;
    .top-section {
      height: 500px;
      margin-bottom:50px;
    }
    .cards-section {
      margin-top: 20px;
      height:auto;
      display: grid;
      max-width:140rem;
      grid-template-columns:1fr 1fr 1fr;
      grid-gap:1.6rem;
    }
  }
`;
