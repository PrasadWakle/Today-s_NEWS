import React from 'react'
import styled from 'styled-components'

export default function Header() {

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }

  const today = new Date().toLocaleDateString("en-IN", options);

  return (
    <Container>
    <div className="date">
        <span className="today">{today}</span>
        <div className="social-icons">
          <a href="/"><i className="social-icon fa-brands fa-twitter"></i></a>
          <a href="/"><i className="social-icon fa-brands fa-facebook-f"></i></a>
          <a href="/"><i className="social-icon fa-brands fa-instagram"></i></a>
        </div>
    </div>
    <h1><span>Today's</span> NEWS</h1>
    </Container>
  )
}

const Container = styled.div`
    margin:0 auto 20px;
    text-align: center;

    .date{
      font-family:"Open Sans", sans-serif;
      font-size: 1rem;
      background-color:#181818;
      color:#ffffff;
      width:100%;
      line-height:30px;
      text-align:left;
      margin-bottom:20px;
      padding: 0 185px 0;
      letter-spacing: 1px;

      .social-icons{
        display:inline-block;
        float:right;
        .social-icon{
          margin-right:20px;
          color:#fff;
        }
      }
    }

    h1{
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 6rem;
      letter-spacing: 1px;
      color: #0F0E0E;

      span{
        font-family:"Merriweather", sans-serif;
        font-weight: 700;
        font-size:6rem;
        color:#DC2F2F;
      }
    }
    
`;
