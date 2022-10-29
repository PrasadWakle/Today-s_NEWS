import React from "react";
import styled from "styled-components";

export default function BootstrapCardsTitle(props) {

  const {id,title,url,imgToUrl} = props;

  return (
    <Container key={id}>
      <div className="card card-1">
        <a href={url} className="card-image">
          <img
            src={imgToUrl}
            className="card-img-top"
            alt=""
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">
            <a href={url} className="title">
              {title}
            </a>
          </h5>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 20px;
  .card-1 {
    width: 100%;
    height: 300px;
    text-align: left;
    line-height: 1.5;
    border-radius: 0;
    border: none;
    &:hover .card-body .title {
      color:#DC2F2F;
    }
    .card-image {
      width: 100%;
      height: 60%;
      background-color: grey;
      img {
        width: 100%;
        height: 100%;
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
    }
  }
`;
