import styled from "styled-components";
import TopCard from "../components/TopCard";
import Navbar from "../components/Navbar";
import CarouselItem from "../components/CarouselItem";
import SideTitleCard from "../components/SideTitleCard";
import BootstrapCards from "../components/BootstrapCards";
import SectionHeader from "../components/SectionHeader";
import Ad1 from "../Assets/Ad1.png";
import Ad2 from "../Assets/Ad2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Weather from "../components/Weather";
import BootstrapCardsTitle from "../components/BootstrapCardTitle";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [health, setHealth] = useState([]);
  const [business, setBusiness] = useState([]);
  const [tech, setTech] = useState([]);
  const [sports, setSports] = useState([]);
  const [entertainment, setEntertainment] = useState([]);

  const topHeadlinesUrl =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=4d15ab0c37164629a49726604ab9f6c6";
  const healthUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4d15ab0c37164629a49726604ab9f6c6";
  const businessUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4d15ab0c37164629a49726604ab9f6c6";
  const techUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4d15ab0c37164629a49726604ab9f6c6";
  const sportsUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=4d15ab0c37164629a49726604ab9f6c6";
  const entertaimentUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=4d15ab0c37164629a49726604ab9f6c6";

  useEffect(() => {
    const topHeadlines = async () => {
      try {
        const reqTopHeadlines = await axios.get(topHeadlinesUrl);
        const reqHealth = await axios.get(healthUrl);
        const reqBusiness = await axios.get(businessUrl);
        const reqScience = await axios.get(techUrl);
        const reqSports = await axios.get(sportsUrl);
        // const reqTech = await axios.get(techUrl);
        const reqEntertainment = await axios.get(entertaimentUrl);

        axios
          .all([
            reqTopHeadlines,
            reqHealth,
            reqBusiness,
            reqScience,
            reqSports,
            // reqTech,
            reqEntertainment,
          ])
          .then(
            axios.spread((...responses) => {
              const resTopHeadlines = responses[0];
              const resHealth = responses[1];
              const resBusiness = responses[2];
              const resTech = responses[3];
              const resSports = responses[4];
              const resEntertainment = responses[5];

              setTopHeadlines(resTopHeadlines.data.articles);
              setHealth(resHealth.data.articles);
              setBusiness(resBusiness.data.articles);
              setTech(resTech.data.articles);
              setSports(resSports.data.articles);
              setEntertainment(resEntertainment.data.articles);
            })
          );
      } catch (err) {
        console.log(err.message);
      }
    };
    topHeadlines();
  }, []);

  return (
    <Containeer>
      <Header />

      <Navbar />
      <div className="news-content">
        {/********************************  Top Container *************************************/}
        <div id="top-container">
          <main>
            {topHeadlines.slice(0, 3).map(() => {
              return (
                <>
                  <div className="main-item-1">
                    <TopCard
                      key={topHeadlines[0].source.id}
                      id={topHeadlines[0].source.id}
                      title={topHeadlines[0].title}
                      url={topHeadlines[0].url}
                      imgToUrl={topHeadlines[0].urlToImage}
                      author={topHeadlines[0].author}
                      date={topHeadlines[0].publishedAt}
                    />
                  </div>
                  <div className="main-item-2">
                    <TopCard
                      key={topHeadlines[1].source.id}
                      id={topHeadlines[1].source.id}
                      title={topHeadlines[1].title}
                      url={topHeadlines[1].url}
                      imgToUrl={topHeadlines[1].urlToImage}
                      author={topHeadlines[1].author}
                      date={topHeadlines[1].publishedAt}
                    />
                  </div>
                  <div className="main-item-3">
                    <TopCard
                      key={topHeadlines[2].source.id}
                      id={topHeadlines[2].source.id}
                      title={topHeadlines[2].title}
                      url={topHeadlines[2].url}
                      imgToUrl={topHeadlines[2].urlToImage}
                      author={topHeadlines[2].author}
                      date={topHeadlines[2].publishedAt}
                    />
                  </div>
                </>
              );
            })}
          </main>
        </div>

        {/********************************  Middle Container *************************************/}

        <div id="carousel-section">
          <SectionHeader headerTitle="Travel" />

          <div className="carousel-items">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {health.slice(0, 3).map((article, index) => {
                  return (
                    <>
                      <CarouselItem
                        key={health[0].source.id}
                        id={health[0].source.id}
                        title={health[0].title}
                        description={health[0].description}
                        url={health[0].url}
                        imgToUrl={health[0].urlToImage}
                        author={health[0].author}
                        date={health[0].date}
                      />
                      <CarouselItem
                        key={health[1].source.id}
                        id={health[1].source.id}
                        title={health[1].title}
                        description={health[1].description}
                        url={health[1].url}
                        imgToUrl={health[1].urlToImage}
                        author={health[1].author}
                        date={health[1].date}
                      />
                      <CarouselItem
                        key={health[2].source.id}
                        id={health[2].source.id}
                        title={health[2].title}
                        description={health[2].description}
                        url={health[2].url}
                        imgToUrl={health[2].urlToImage}
                        author={health[2].author}
                        date={health[2].date}
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

        <div id="side-cards-section">
          <SectionHeader headerTitle="Sports" />

          <div className="cards-1">
            {sports.slice(0, 4).map((article) => {
              return (
                <SideTitleCard
                  key={article.title}
                  id={article.title}
                  title={article.title}
                  url={article.url}
                  imgToUrl={article.urlToImage}
                />
              );
            })}
          </div>
        </div>

        {/********************************  Bottom Container *************************************/}
        <div id="cards-section">
          <SectionHeader headerTitle="Business" />

          <div className="cards-2">
            {business.slice(0, 4).map((article) => {
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

        {/********************  Weather *******************************/}
        <div id="weather">
          <SectionHeader headerTitle="Today's Weather" />
          <Weather />
        </div>

        <div id="ad-1">
          <a href="/">
            <img src={Ad1} alt="ad1" />
          </a>
        </div>
        <div id="ad-2">
          <a href="/">
            <img src={Ad2} alt="ad2" />
          </a>
        </div>

        <div className="cards-3">
          <SectionHeader headerTitle="Science/Technology" />
          <div className="card-3">
            {tech.slice(0, 2).map((article) => {
              return (
                <div className="flex-items">
                  <BootstrapCardsTitle
                    key={article.title}
                    id={article.title}
                    title={article.title}
                    url={article.url}
                    imgToUrl={article.urlToImage}
                    author={article.author}
                    date={article.publishedAt}
                  />
                </div>
              );
            })}
            {/* <div className="flex-items">
              <BootstrapCardsTitle
                title="Instagram to make it easier to avoid trolls"
                url="/"
                imgToUrl="https://th-i.thgim.com/public/incoming/f66rss/article66039086.ece/alternates/FREE_1200/Digital_Life_App_Watch_New_Instagram_Tools.JPEG-0383f.jpg"
                author="Reuters"
                date="24 October 2022"
              />
            </div> */}
          </div>
        </div>

        <div className="cards-4">
          <SectionHeader headerTitle="Entertainment" />
          <div className="card-4">
            {entertainment.slice(0, 1).map((article) => {
              return (
                <BootstrapCardsTitle
                  key={article.title}
                  id={article.title}
                  title={article.title}
                  url={article.url}
                  imgToUrl={article.urlToImage}
                  author={article.author}
                  date={article.publishedAt}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </Containeer>
  );
}

export default Home;

const Containeer = styled.div`
  .news-content {
    margin: 50px auto;
    width: 75%;
    height: 100%;
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 500px 540px 425px 425px 200px 350px;
    grid-template-areas:
      "main main"
      "carousel cards-1"
      "cards-2 weather"
      "cards-2 ad1"
      "ad2 ad2"
      "cards-3 cards-4";

    grid-gap: 2.5rem;
    #top-container {
      grid-area: main;
      main {
        display: grid;
        grid-gap: 0px;
        grid-template-columns: 1.2fr 0.8fr;
        grid-template-rows: 1fr 1fr;
        grid-area: main;
        grid-template-areas: "item1 item2" "item1 item3";
        grid-gap: 0.4rem;
        cursor: pointer;
        .main-item-1 {
          height: 500px;
          grid-area: item1;
        }
        .main-item-2 {
          height: 247px;
          grid-area: item2;
        }
        .main-item-3 {
          height: 247px;
          grid-area: item3;
        }
      }
    }

    #carousel-section {
      grid-area: carousel;
      .carousel-items {
        height: 500px;
      }
    }

    #side-cards-section {
      grid-area: cards-1;
      .cards-1 {
        height: 500px;
        .side-cards {
          height: auto;
        }
      }
    }

    #cards-section {
      grid-area: cards-2;
      .cards-2 {
        height: 850px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2.2rem;
        grid-row-gap: 0.5rem;
      }
    }

    #weather {
      grid-area: weather;
      height: 425px;
    }

    #ad-1 {
      grid-area: ad1;
      height: 425px;
      img {
        width: 100%;
        height: 420px;
      }
    }

    #ad-2 {
      grid-area: ad2;
      height: 200px;
      img {
        width: 100%;
        height: 200px;
      }
    }

    .cards-3 {
      grid-area: cards-3;
      .card-3 {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        .flex-items {
          width: 350px;
        }
      }
    }

    .cards-4 {
      grid-area: cards-4;

      .card-4 {
        width: 370px;
      }
    }
  }
`;

