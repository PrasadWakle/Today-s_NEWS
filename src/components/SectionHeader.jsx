import React from "react";
import styled from "styled-components";

export default function SectionHeader(props) {
  return (
    <Container>
      <div className="section-header-container">
        <div className="border-line"></div>
        <h4 className="section-heading"><span>{props.headerTitle}</span></h4>
      </div>
    </Container>
  );
}

const Container = styled.div`
.section-header-container {
    width: 100%;
    height: 45px;
    margin-bottom: 30px;
    position: relative;
    margin: 0;
    padding: 0;
    font-family: "Open Sans",sans-serif;
    display: inline-block;
    .border-line{
    background: #000;
    float: left;
    height: 2px;
    width: 100%;
    position: absolute;
    top: 22px;
}
.section-heading {
    font-weight: 500;
    text-transform: capitalize;
    line-height:1;
    font-size:20px;
    padding-right: 10px;
    span{
      padding-right: 5px;
      background-color: #000;
      color:#fff;
    }
}
}

`;
