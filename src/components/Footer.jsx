import React from "react";
import styled from "styled-components";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <div className="logo-follow-us">
        <div className="logo">
          <h3>
            <span>Today's</span>NEWS
          </h3>
          <p className="logo-subtitle">Truth Through Digital Reach</p>
          <p className="contact-us">Contact us: <a href="mailto:news@email.com">news@email.com</a></p>
        </div>
        <div className="follow-us">
          <p className="follow-us-text">FOLLOW US</p>
          <a href="/">
            <i className="social-icon fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i className="social-icon fa-brands fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="social-icon fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="border-line"></div>
      <div className="copyright">
        <p className="copyright-text">Copyright&copy; {year}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: #181818;
  margin-top: 70px;
  width:100%;
  height: 400px;
  .logo-follow-us {
    padding: 50px 250px 0;
    margin:20px auto;
    .logo {
        float: left;
      h3 {
        font-weight: 800;
        font-size: 4rem;
        letter-spacing: 1px;
        color: #0f0e0e;

        span {
          font-family: "Merriweather", sans-serif;
          font-weight: 700;
          font-size: 4rem;
          color: #dc2f2f;
          padding-right:10px;
        }
      }

      .logo-subtitle{
        color:#fff;
        font-size: 1.4rem;
        font-weight:500;
        line-height:1;
      }

      .contact-us{
        color:#fff;
      }
     
    }

    .follow-us{
        float: right;
        padding: 10px 50px;
        color:#fff;
        font-size:1.3rem;
        font-weight: 600;
        line-height:1;
        letter-spacing:0.5px;

        .social-icon{
            margin-right:20px;
            margin-left:0;
            padding:10px 10px 10px 0;
        }
    }
  }

  .border-line{
    background:#DBDBDB;
    width:80%;
    margin:auto;
    height:2px;
    margin-top:200px;
    margin-bottom:0;
    padding: 0 5px;
    border-radius:1px;
    
  }

  .copyright{
    font-size:1rem;
    font-weight:500;
    color:#fff;
    text-align:center;
    .copyright-text{
      padding-top:50px;
      padding-bottom:70px;
    }
  }
`;
