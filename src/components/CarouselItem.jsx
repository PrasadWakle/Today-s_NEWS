import React from "react";
import styled from "styled-components";

export default function CarouselItem(props) {
  const { id, title, description, url, imgToUrl, author, date } = props;

  return (
    <Container key={id}>
      <div className="carousel-item active" data-bs-interval="5000">
        <a href={url} className="image-tag">
          <img src={imgToUrl} className="d-block w-100" alt="" />
        </a>
        <div className="carousel-caption d-none d-md-block">
          <h5>
            <a href={url} rel="bookmark" className="carousel-heading">
              {title}
            </a>
          </h5>
          <p>{description}</p>
          <div className="news-info">
            <span className="author">{author}</span>
            <span className="date">{date}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  .carousel-item {
    
    &:hover .carousel-heading {
      color: #dc2f2f;
    }
    .carousel-caption {
      background-color: rgba(0, 0, 0, 0.3);
      h5 {
        text-align: left;

        .carousel-heading {
          font-size: 2.2rem;
          color: #ffffff;
          font-weight: 600;
          letter-spacing: 1px;
          line-height: 1;
          text-decoration: none;
        }
      }
      p {
        text-align: left;
        font-size: 1.4rem;
        color: #ffffff;
        line-height: 1.2;
        text-decoration: none;
      }
      .news-info {
        text-align: left;
        span {
          font-family: open sans, open sans regular, sans-serif;
          color: #ffffff;
          font-size: 0.8rem;
          padding-right: 15px;
        }
      }
    }
    img {
      width:100%;
      height: 500px;
      brightness: 80%;
      linear-gradient: (rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1));
    }
  }
`;
