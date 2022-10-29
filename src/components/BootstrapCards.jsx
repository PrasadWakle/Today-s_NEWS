import React from "react";
import styled from "styled-components";

export default function BootstrapCards(props) {
  const {id, title, description, url, imgToUrl, author, date } = props;

  return (
    <Container key={id}>
      <div className="card card-1">
        <a href={url} className="card-image">
          <img src={imgToUrl} className="card-img-top" alt="" />
        </a>
        <div className="card-body">
          <h5 className="card-title">
            <a href={url} className="title">
              {title}
            </a>
          </h5>
          <div className="card-text">
            {description && description.substring(0, 60)}...
            <div className="card-author-date">
              <span className="card-text author">{author}</span>
              <span className="card-text date">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 20px;
  height: 400px;
  .card-1 {
    width: 100%;
    text-align: left;
    line-height: 1.5;
    border-radius: 0;
    border: none;
    &:hover .card-body .title {
      color: #dc2f2f;
    }
    .card-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
      background-color:grey;
      img {
        height: 200px;
        border-radius: 0;
      }
    }
    .card-body {
      margin-bottom: 20px;
      .title {
        font-family: "Montserrat", sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
        text-decoration: none;
        color: #000000;
      }

      .card-text {
        height: auto;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        text-decoration: none;
        color: #000;
      }
      span {
        font-family: open sans, open sans regular, sans-serif;
        color: #000;
        font-size: 0.8rem;
        padding-right: 15px;
      }
    }
  }
`;
