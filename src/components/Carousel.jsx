import CarouselItem from "./CarouselItem";

function Carousel(props) {

  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <CarouselItem
            key={props[0].id}
            title={props[0].title}
            description={props[0].description}
            url={props[0].url}
            imgToUrl={props[0].imgToUrl}
            author={props[0].author}
            date={props[0].date}
          />
          <CarouselItem
            key={props[1].id}
            title={props[1].title}
            description={props[1].description}
            url={props[1].url}
            imgToUrl={props[1].imgToUrl}
            author={props[1].author}
            date={props[1].date}
          />
          <CarouselItem
            key={props[2].id}
            title={props[2].title}
            description={props[2].description}
            url={props[2].url}
            imgToUrl={props[2].imgToUrl}
            author={props[2].author}
            date={props[2].date}
          />
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
    </>
  );
}

export default Carousel;
